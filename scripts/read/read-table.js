/**
 * It reads the table by its column and returns an array with values read
 * @param {Number} column The column number that will be read. The first column has index = 1
 */
function readTable(column) {
    let columnValues = [];

    //The columns 2 and 4 always has number values. The other ones could be strings.
    if(column == 2 || column == 4) {
        $(`tbody td:nth-child(${column})`).each(function (index) {
            let value = ($(this).text())
            columnValues.push(Number(value));
        });
    } else {
        $(`tbody td:nth-child(${column})`).each(function (index) {
            let value = ($(this).text())
            columnValues.push(value);
        });
    }

    return columnValues
}