const { productsBySection, ordersByShopper, realShoppers } = require('./db/database.js')
const command = process.argv[2]
const commandInput = process.argv[3]

switch (command) {
  case 'product-list':
    productsBySection(commandInput)
    break
  case 'shopper-orders':
    ordersByShopper(commandInput)
    break
  case 'real-shoppers':
    realShoppers()
    break
  default:
    console.log(
    `Please enter a valid command:
    product-list <product-section>
    shopper-orders <shopper-id>
    real-shoppers`
    )
}
