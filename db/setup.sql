create table coffee_orders (order_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name TEXT, price NUMERIC, delivery TEXT, datum DATE) default CHARACTER SET utf8;
insert into coffee_orders (name, price, delivery, datum) values ('Columbia Mercedes', 15, 'brano.majernik@gmail.com', '2018-01-10');
insert into coffee_orders (name, price, delivery, datum) values ('Cuba Serano', 17, 'branoM@oracle.com', '2018-01-11');
insert into coffee_orders (name, price, delivery, datum) values ('Cuba Serano', 17, 'branoM@oracle.com', '2018-01-12');
insert into coffee_orders (name, price, delivery, datum) values ('Kenya Kilimanjaro', 17, 'branoM@oracle.com', '2018-01-12');
insert into coffee_orders (name, price, delivery, datum) values ('Ethiopia Sidamo', 17, 'branoM@oracle.com', '2018-01-12');
insert into coffee_orders (name, price, delivery, datum) values ('Ethiopia Sidamo', 17, 'brano.majernik@gmail.com', '2018-01-12');
