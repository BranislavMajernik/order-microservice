//  repository.js
//
//  Exposes a single function - 'connect', which returns
//  a connected repository. Call 'disconnect' on this object when you're done.
'use strict';

var mysql = require('mysql');

//  Class which holds an open connection to a repository
//  and exposes some simple functions for accessing data.
class Repository {
  constructor(connectionSettings) {
    this.connectionSettings = connectionSettings;
    this.connection = mysql.createConnection(this.connectionSettings);
  }


  getOrders() {
    return new Promise((resolve, reject) => {

      this.connection.query('SELECT name, price, delivery, datum FROM coffee_orders', (err, results) => {
        if(err) {
          this.connection = mysql.createConnection(this.connectionSettings);
          return reject(new Error('An error occured getting the orders: ' + err));
        }

        resolve((results || []).map((order) => {
          return {
            id: order.order_id,
            name: order.name,
            price: order.price,
            delivery: order.delivery,
            date: order.datum
          };

        }));
      });

    });
  }


  insertOrder(kava, cena) {
    return new Promise((resolve, reject) => {
      var sql = "INSERT INTO coffee_orders (name, price, delivery, datum) VALUES ("+ "'" + kava + "'" + "," + cena + ",'branoM@oracle.com', '2018-01-15')";
      console.log(sql);
      this.connection.query(sql, (err, results) => {
        console.log("1 record inserted " + kava + cena);
        if(err) {
          this.connection = mysql.createConnection(this.connectionSettings);
          return reject(new Error('An error occured getting the orders: ' + err));
        }
      });
    });
  }

  disconnect() {
    this.connection.end();
  }
}

//  One and only exported function, returns a connected repo.
module.exports.connect = (connectionSettings) => {
  return new Promise((resolve, reject) => {
    if(!connectionSettings.host) throw new Error("A host must be specified.");
    if(!connectionSettings.user) throw new Error("A user must be specified.");
    if(!connectionSettings.password) throw new Error("A password must be specified.");
    if(!connectionSettings.port) throw new Error("A port must be specified.");

    resolve(new Repository(connectionSettings));
  });
};
