CREATE TABLE orders {
  order_number INTEGER PRIMARY KEY NOT NULL,
  customer_number INTEGER
};

SELECT a.customer_number FROM
(SELECT customer_number, count(order_number) as total
FROM orders
GROUP BY customer_number) AS a
ORDER BY a.total DESC
LIMIT 1;

SELECT a.customer_number  
FROM orders a GROUP BY a.customer_number 
ORDER BY count(a.order_number) DESC limit 1