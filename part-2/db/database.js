const { Client } = require('pg')

const dbName = process.env.NODE_ENV === 'test'
? 'grocery_store_test'
: 'grocery_store'

const client = new Client({
  host: 'localhost',
  port: 5432,
  database: dbName
})

client.connect()

function productsBySection(section) {
  const query = `
    SELECT
      name,
      section
    FROM products
    WHERE section = $1
    ;`

  client.query(query, [ section ])
    .then(res => console.log(res.rows))
    .then(res => client.end())
    .catch(err => console.error(err.stack))
}

function ordersByShopper(shopper_id) {
  const query = `
    SELECT
      o.id order_id,
      SUM(p.price) order_cost
    FROM shoppers s
    JOIN orders o on s.id = o.shopper_id
    JOIN order_products op on o.id = op.order_id
    JOIN products p on op.product_id = p.id
    WHERE s.id = $1
    GROUP BY o.id
    ;`

  client.query(query, [ shopper_id ])
    .then(res => console.log(res.rows))
    .then(res => client.end())
    .catch(err => console.error(err.stack))
}

function realShoppers() {
  const query = `
    SELECT
      s.name shopper_name,
      count(o.id) order_count
    FROM shoppers s
    JOIN orders o on s.id = o.shopper_id
    GROUP BY s.name
    ;`

  client.query(query)
    .then(res => console.log(res.rows))
    .then(res => client.end())
    .catch(e => console.error(e.stack))
}

module.exports = { productsBySection, ordersByShopper, realShoppers }
