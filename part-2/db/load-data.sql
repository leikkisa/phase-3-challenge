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

INSERT INTO order_products (order_id, product_id) VALUES
  (1, 3),
  (1, 4),
  (1, 14),
  (1, 12),
  (2, 7),
  (2, 29),
  (2, 16),
  (2, 17),
  (2, 2),
  (2, 1),
  (3, 38),
  (3, 23),
  (4, 34),
  (5, 10),
  (5, 14),
  (5, 13),
  (5, 3),
  (5, 41),
  (5, 30),
  (5, 40),
  (5, 28),
  (5, 31),
  (5, 35),
  (6, 33),
  (6, 40),
  (6, 20),
  (7, 15),
  (7, 36),
  (8, 23);
