DROP TABLE IF EXISTS products, shoppers, orders, order_products;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  price DECIMAL(5,2) NOT NULL,
  section VARCHAR(50) NOT NULL
);

CREATE TABLE shoppers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  shopper_id INTEGER REFERENCES shoppers (id) NOT NULL
);

CREATE TABLE order_products (
  order_id INTEGER REFERENCES orders (id) NOT NULL,
  product_id INTEGER REFERENCES products (id) NOT NULL,
  PRIMARY KEY (order_id, product_id)
);
