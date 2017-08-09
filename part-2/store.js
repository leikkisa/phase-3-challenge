const { productsBySection, orderTotalsByShopper, orderCountByShopper, endClient } = require('./db/database.js')
const { printTable } = require('./printTable.js')

const command = process.argv[2]
const commandInput = process.argv[3]
let tableOptions = {}

switch (command) {
  case 'product-list':
    tableOptions = { fields: ['name', 'section'], headers: ['Product Name', 'Section'], alignment: ['left', 'left']}
    productsBySection(commandInput)
      .then((records) => {
        if (records.rows.length === 0) {
          throw new Error ('No records returned. Make sure you are entering a valid grocery section after the "product-list" command.')
        }
        printTable(tableOptions, records.rows)
      })
      .catch(err => console.log(err.message))
      .then(() => endClient())
    break

  case 'shopper-orders':
    tableOptions = { fields: ['order_id', 'order_cost'], headers: ['order id', 'total cost'], alignment: ['right', 'right']}
    orderTotalsByShopper(commandInput)
      .then((records) => {
        if (records.rows.length === 0) {
          throw new Error ('No records returned. Make sure you are entering a valid shopper_id after the "shopper-orders" command.')
        }
        printTable(tableOptions, records.rows)
      })
      .catch(err => console.log(err.message))
      .then(() => endClient())
    break

  case 'real-shoppers':
    tableOptions = { fields: ['name', 'order_count'], headers: ['shopper name', 'number of orders'], alignment: ['left', 'right']}
    orderCountByShopper()
      .then(records => printTable(tableOptions, records.rows))
      .catch(err => console.log(err.message))
      .then(() => endClient())
    break

  default:
    console.error(
    `Please enter a valid command:
    product-list <product-section>
    shopper-orders <shopper-id>
    real-shoppers`
    )
}
