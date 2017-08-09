const { Client } = require('pg')

const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'grocery_store'
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
  return client.query(query, [ section ])
    .then(res => res.rows)
    .catch(err => console.error(err.stack))
}

function orderTotalsByShopper(shopper_id) {
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
  return client.query(query, [ shopper_id ])
    .then(res => res.rows)
    .catch(err => console.error(err.stack))
}

function orderCountByShopper() {
  const query = `
    SELECT
      s.name,
      count(o.id) order_count
    FROM shoppers s
    JOIN orders o on s.id = o.shopper_id
    GROUP BY s.name
    ;`
  return client.query(query)
    .then(res => res.rows)
    .catch(err => console.error(err.stack))
}

function endClient() {
  client.end()
}

module.exports = { productsBySection, orderTotalsByShopper, orderCountByShopper, endClient }
