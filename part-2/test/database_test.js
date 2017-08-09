const chai = require('chai')
const expect = chai.expect

const {
  productsBySection,
  orderTotalsByShopper,
  orderCountByShopper
} = require('../db/database.js')

describe('Database queries', function() {

  context('productsBySection()', function() {

    it('returns 7 records for dairy section', () => {
      return productsBySection('dairy')
        .then((records) => {
          expect(records.length).to.equal(7)
        })
    })

    it('includes product name and section in results', () => {
      return productsBySection('dairy')
        .then((records) => {
        expect(records[0]).to.have.all.keys('name', 'section')
      })
    })

    it('includes dairy in results', () => {
      return productsBySection('dairy')
        .then((records) => {
        expect(records[0]).to.have.property('section', 'dairy')
      })
    })

    it.only('does not return anything in "candy" section', () => {
      return productsBySection('candy')
        .then((records) => {
        expect(records.length).to.equal(0)
      })
    })

    it('returns an error if not passed a string', () => {

    })

  })

  context('orderTotalsByShopper()', function() {

    it('returns 3 records for Mishi, Shopper 5', () => {
      return orderTotalsByShopper(5)
        .then((records) => {
        expect(records.length).to.equal(3)
      })
    })

    it('includes order_id and total_cost in results', () => {
      return orderTotalsByShopper(5)
        .then((records) => {
        expect(records[0])
          .to.have.all.keys('order_id', 'order_cost')
      })
    })

    it.skip('includes order_id of 8 and total cost of 14.08 for shopper 3', () => {
      return orderTotalsByShopper(3)
        .then((records) => {
        expect(records[0])
          .to.have.values('dairy', 'section')
      })
    })

    it('does not return any orders for shopper 2', () => {
      return orderTotalsByShopper(2).then((records) => {
        expect(records.length).to.equal(0)
      })
    })

  })

  context('orderCountByShopper()', function() {

    it('returns 4 records for shoppers who have actually made orders', () => {
      return orderCountByShopper().then((records) => {
        expect(records.length).to.equal(4)
      })
    })

    it('includes shopper name and number of orders', () => {
      return orderCountByShopper().then((records) => {
        expect(records[0])
          .to.have.all.keys('name', 'order_count')
      })
    })

    it.skip('includes Mishi with three orders in result', () => {
      return orderCountByShopper().then((records) => {
        expect(records[0])
          .to.have.values('Mishi', '3')
      })
    })

  })
})
