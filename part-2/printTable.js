// printTable function prints tables with two columns, in the format specified in Part-2
// data should be an array of objects, each with two keys
// options should be an object of arrays, each with two elements (first one for the left column, second for the right column)
// options should specify the headers, fields, and alignment (right or left)

function printTable(options, data) {
// Calculate widths for each column
  let fieldMax = []
  options.fields.forEach((field, i) => {
    fieldMax[i] = Math.max.apply(Math,data.map(function(item) {
      return item[field].toString().length
    }))
  })
  const leftLength = Math.max(fieldMax[0], options.headers[0].length) + 2
  const rightLength = Math.max(fieldMax[1], options.headers[1].length) + 2

// The lines on top/bottom/between header and data
  const rowSeparator = '| ' + Array(leftLength).join('-') + '+' + Array(rightLength).join('-') + ' |'

// Console log the table
  console.log(rowSeparator)
  printDataRow(options.headers[0], options.headers[1])
  console.log(rowSeparator)
  data.forEach((row) => {
    printDataRow(row[options.fields[0]], row[options.fields[1]])
  })
  console.log(rowSeparator)

// Function to create the header and data rows
  function printDataRow (leftData, rightData) {
    let leftDataRow = ''
    let rightDataRow = ''
    if (options.alignment[0] === 'left') {
      leftDataRow = '| ' + leftData + Array(leftLength - leftData.toString().length - 1).join(' ') + ' | '
    } else {
      leftDataRow = '| ' + Array(leftLength - leftData.toString().length - 1).join(' ') + leftData + ' | '
    }
    if (options.alignment[1] === 'left') {
      rightDataRow = rightData + Array(rightLength - rightData.toString().length - 1).join(' ') + ' |'
    } else {
      rightDataRow = Array(rightLength - rightData.toString().length - 1).join(' ') + rightData + ' |'
    }
    const dataRow = leftDataRow + rightDataRow
    console.log(dataRow)
  }
}

module.exports = { printTable }
