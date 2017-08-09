function printTable(options, data) {
  let fieldMax = []
  options.fields.forEach((field, i) => {
    fieldMax[i] = Math.max.apply(Math,data.map(function(item) {
      return item[field].toString().length
    }))
  })
  const leftLength = Math.max(fieldMax[0], options.headers[0].length) + 2
  const rightLength = Math.max(fieldMax[1], options.headers[1].length) + 2

  const rowSeparator = '| ' + Array(leftLength).join('-') + '+' + Array(rightLength).join('-') + ' |'

  console.log(rowSeparator)
  printDataRow(options.headers[0], options.headers[1])
  console.log(rowSeparator)
  data.forEach((row) => {
    printDataRow(row[options.fields[0]], row[options.fields[1]])
  })
  console.log(rowSeparator)

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
