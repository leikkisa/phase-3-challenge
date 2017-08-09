const { productsBySection, ordersByShopper, realShoppers } = require('./db/database.js')
const { printTable } = require('./printTable.js')
const command = process.argv[2]
const commandInput = process.argv[3]
const options = {}

switch (command) {
  case 'product-list':
    options.fields = ['name', 'section']
    options.headers = ['Product Name', 'Section']
    options.alignment = ['left', 'left']
    productsBySection(commandInput)
    .then((records) => {
      printTable(options, records)
    })
    break
  case 'shopper-orders':
    options.fields = ['order_id', 'order_cost']
    options.headers = ['order id', 'total cost']
    options.alignment = ['right', 'right']
    ordersByShopper(commandInput)
    .then((records) => {
      console.log(records)
      printTable(options, records)
    })
    break
  case 'real-shoppers':
    realShoppers()
    break
  default:
    console.error(
    `Please enter a valid command:
    product-list <product-section>
    shopper-orders <shopper-id>
    real-shoppers`
    )
}
