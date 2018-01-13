//  coffee_order.js
//
//  Defines the users api. Add to a server by calling:
//  require('./coffee_order')
'use strict';

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();


//  Only export - adds the API to the app with the given options.
module.exports = (app, options) => {

  app.use(express.urlencoded());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.post('/order', (req, res, next) => {
    var kava_name=req.body.kava;
    var price_val=req.body.price;
  //  var kava_name = req.param('order.kava', null);
    console.log("Insert order api call");
    console.log(req.body);
    console.log("Kava name = "+ kava_name + price_val);
    options.repository.insertOrder(kava_name, price_val).then(
    //  console.log("Insert order api call");
    )
    .catch(next);
  });

  app.get('/orders', (req, res, next) => {
    options.repository.getOrders().then((orders) => {
      res.status(200).send(orders.map((order) => { return {
          id: order.order_id,
          name: order.name,
          price: order.price,
          delivery: order.delivery,
          date: order.datum
        };
      }));
    // console.log("Order_id: " {order.order_id});
    })
    .catch(next);
  });



};
