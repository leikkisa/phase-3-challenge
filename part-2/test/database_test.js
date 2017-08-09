const chai = require('chai')
const expect = chai.expect

const {
  productsBySection,
  ordersByShopper,
  realShoppers
} = require('../db/database.js')

describe('Database queries', function() {

  context('productsBySection()', function() {

    it.only('returns 7 records for dairy section', () => {
      return productsBySection('dairy')
        .then((records) => {
          expect(records.length).to.equal(7)
        })
    })

    it('includes product name and section in results', () => {
      return productsBySection('dairy').then((records) => {
        expect(records[0])
          .to.have.all.keys('name', 'section')
      })
    })

    it('includes dairy in results', () => {
      return productsBySection('dairy').then((records) => {
        expect(records[0])
          .to.have.values('dairy', 'section')
      })
    })

    it('does not return anything in "candy" section', () => {
      return productsBySection('candy').then((records) => {
        expect(records.length).to.equal(0)
      })
    })

  })

  context('orderCountByShopper()', function() {

    it('returns 3 records for Mishi, Shopper 5', () => {
      return orderCountByShopper(5).then((records) => {
        expect(records.length).to.equal(7)
      })
    })

    it('includes order_id and total_cost in results', () => {
      return orderCountByShopper(5).then((records) => {
        expect(records[0])
          .to.have.all.keys('name', 'section')
      })
    })

    it('includes order_id of 8 and total cost of 14.08 for shopper 3', () => {
      return orderCountByShopper(3).then((records) => {
        expect(records[0])
          .to.have.values('dairy', 'section')
      })
    })

    it('does not return any orders for shopper 2', () => {
      return ordersByShopper(2).then((records) => {
        expect(records.length).to.equal(0)
      })
    })

  })

  context('realShoppers()', function() {

    it('returns 4 records for shoppers who have actually made orders', () => {
      return realShoppers().then((records) => {
        expect(records.length).to.equal(4)
      })
    })

    it('includes shopper name and number of orders', () => {
      return realShoppers().then((records) => {
        expect(records[0])
          .to.have.all.keys('name', 'order_count')
      })
    })

    it('includes Mishi with three orders in result', () => {
      return realShoppers().then((records) => {
        expect(records[0])
          .to.have.values('Mishi', '3')
      })
    })

  })
})
