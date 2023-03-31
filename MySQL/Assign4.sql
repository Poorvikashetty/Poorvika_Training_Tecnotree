CREATE TABLE CUSTOMER (
customer_Id INTEGER PRIMARY KEY,
customer_name VARCHAR(50),
customer_email VARCHAR(40),
customer_phone varchar(20)
);
CREATE TABLE PRODUCT (
  productId INTEGER PRIMARY KEY,
  name VARCHAR(50),
  price DECIMAL(10, 2)
);
-- Create the ORDER table with a foreign key to the CUSTOMER table
CREATE TABLE order_table (
order_Id INTEGER PRIMARY KEY,
customer_Id INTEGER,
order_Date DATE,
product_id int,
order_quantity int,
FOREIGN KEY (customer_Id) REFERENCES CUSTOMER(customer_Id),
FOREIGN KEY (productId) REFERENCES PRODUCT(productId)
);

insert into customer values(10, 'Impana', 'impana@gmail.com','7666367982');
insert into customer values(20, 'Pooja', 'pooja@gmail.com','7008367982');
insert into customer values(30, 'Poorvi', 'poorvi@gmail.com','986367982');
insert into customer values(40, 'Nisha', 'nisha@gmail.com','8765367982');
insert into customer values(50, 'Poorvika', 'poorvika@gmail.com','6126367982');

INSERT INTO product (product_Id, product_name, price) VALUES
(11, 'Book', 100),
(12, 'Dress', 700),
(13, 'pen', 800),
(14, 'Pencil', 10);

insert into order_table values(100, '10', '2023-03-21', 11, 2);
insert into order_table values(200, '10', '2023-03-22', 11, 5);
insert into order_table values(300, '20', '2023-03-23', 12, 6);
insert into order_table values(400, '40', '2023-03-24', 13, 10);
insert into order_table values(500, '40', '2023-03-25', 14, 7);


alter table customer 
add column phone varchar(20) after email;

alter table order_table 
add column order_quantity int after order_Date;


-- view for customer order
CREATE VIEW customer_orders_view AS
SELECT c.customer_name, c.customer_email, c.customer_phone, o.order_date, p.product_name, p.price, o.order_quantity
FROM Customer c
JOIN Order_table o ON c.customer_id = o.customer_id
JOIN Product p ON o.product_id = p.product_id;

select * from customer_orders_view;

CREATE VIEW top_selling_products_view AS
SELECT p.product_name, SUM(o.order_quantity) AS total_quantity_sold
FROM Product p
JOIN Order_table o ON p.product_id = o.product_id
GROUP BY p.product_name
ORDER BY total_quantity_sold DESC
LIMIT 5;

select * from top_selling_products_view;

-- view for the customer who has more than one product
CREATE VIEW customers_with_multiple_orders_view AS
SELECT c.customer_name, c.customer_email, c.customer_phone, COUNT(*) AS total_orders
FROM Customer c
JOIN Order_table o ON c.customer_id = o.customer_id
GROUP BY c.customer_id
HAVING COUNT(*) > 1;

select *from customers_with_multiple_orders_view;

-- product_sales_by_month_view
CREATE VIEW product_sales_by_month_view AS
SELECT p.product_name, MONTH(o.order_date) AS month, YEAR(o.order_date) AS year, SUM(o.order_quantity * p.price) AS total_sales
FROM Product p
JOIN Order_table o ON p.product_id = o.product_id
GROUP BY p.product_id, MONTH(o.order_date), YEAR(o.order_date);

select *from product_sales_by_month_view;