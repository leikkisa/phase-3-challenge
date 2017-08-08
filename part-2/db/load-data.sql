\COPY products (name, price, section) FROM './data/grocery.csv' DELIMITER ',' CSV header;

INSERT INTO shoppers (name) VALUES
  ('Sally'),
  ('Zubair'),
  ('Phil'),
  ('Sabrin'),
  ('Mishi');

INSERT INTO orders (shopper_id) VALUES
  (1),
  (5),
  (4),
  (5),
  (1),
  (4),
  (5),
  (3);

INSERT INTO order_products (order_id, product_id, quantity) VALUES
  (1, 3, 2),
  (1, 4, 1),
  (1, 14, 1),
  (1, 12, 1),
  (2, 7, 2),
  (2, 29, 1),
  (2, 16, 1),
  (2, 17, 1),
  (2, 2, 1),
  (2, 1, 1),
  (3, 38, 1),
  (3, 23, 1),
  (4, 34, 2),
  (5, 10, 1),
  (5, 14, 1),
  (5, 13, 1),
  (5, 3, 1),
  (5, 41, 1),
  (5, 30, 1),
  (5, 40, 1),
  (5, 28, 1),
  (5, 31, 1),
  (5, 35, 1),
  (6, 33, 1),
  (6, 40, 3),
  (6, 20, 1),
  (7, 15, 5),
  (7, 36, 1),
  (8, 23, 10);
