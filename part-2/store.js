const { productsBySection, orderTotalsByShopper, orderCountByShopper } = require('./db/database.js')
const { printTable } = require('./printTable.js')

const command = process.argv[2]
const commandInput = process.argv[3]
const table = {}

switch (command) {
  case 'product-list':
    table.fields = ['name', 'section']
    table.headers = ['Product Name', 'Section']
    table.alignment = ['left', 'left']
    productsBySection(commandInput)
      .then((records) => {
        if (records.length === 0) {
          throw new Error ('No records returned. Make sure you are entering a valid grocery section after the "product-list" command.')
        }
        printTable(table, records)
      })
      .catch(err => console.log(err.message))
    break
  case 'shopper-orders':
    table.fields = ['order_id', 'order_cost']
    table.headers = ['order id', 'total cost']
    table.alignment = ['right', 'right']
    orderTotalsByShopper(commandInput)
      .then((records) => {
        if (records.length === 0) {
          throw new Error ('No records returned. Make sure you are entering a valid shopper_id after the "shopper-orders" command.')
        }
        printTable(table, records)
      })
      .catch(err => console.log(err.message))
    break
  case 'real-shoppers':
    table.fields = ['name', 'order_count']
    table.headers = ['shopper name', 'number of orders']
    table.alignment = ['left', 'right']
    orderCountByShopper()
      .then(records => printTable(table, records))
    break
  default:
    console.error(
    `Please enter a valid command:
    product-list <product-section>
    shopper-orders <shopper-id>
    real-shoppers`
    )
}
