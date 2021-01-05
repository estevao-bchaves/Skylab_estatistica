/**
 * It reads a string in .csv format and parses it into an array.
 * @param {String} data String contaning the variable's data in .csv format (values separated by ,)
 */
function csvToArray(data) {
    //Creating the data array
    data = data.split(/\s*,\s*/);

    //Removing blank elements from input
    for (i = 0; i < data.length; i++) {
        if (data[i] === "") {
            data.splice(i,1);
            i--
        }
    }

    return data
}