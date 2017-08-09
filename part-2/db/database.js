const { Client } = require('pg')
const asciitable = require('asciitable')

const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'grocery_store'
})

const options = {
  skinny: true,
  intersectionCharacter: '+',
}

function productsBySection(section) {
  const query = `
    SELECT
      name,
      section
    FROM products
    WHERE section = $1
    ;`
  client.connect()
  return client.query(query, [ section ])
    .then((res) => {
      client.end()
      return res.rows
    })
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
  client.connect()
  return client.query(query, [ shopper_id ])
    .then((res) => {
      client.end()
      return res.rows
    })
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
  client.connect()
  return client.query(query)
    .then((res) => {
      client.end()
      return res.rows
    })
    .catch(e => console.error(e.stack))
}

module.exports = { productsBySection, orderTotalsByShopper, orderCountByShopper }
