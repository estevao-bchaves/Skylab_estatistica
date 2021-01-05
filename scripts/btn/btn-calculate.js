/**
 * It calculates and shows the output's descriptive statistical form
 * @param {Object} variable Descriptive data object variable. Default is set to undefined
 * @param {Boolean} btnOrganize It verifies if btnOrganize button were clicked
 */
function btnCalculate(variable = undefined, btnOrganize = false) {  
    //Reseting the HTML
    document.getElementById('frequency-organizer').style = ''
    document.getElementById('graph-and-values').style = "display: ''"
    document.getElementById('search-form').style = ''
    document.getElementById('search-result').innerHTML = ''
    document.getElementById('search-value').value = ''
    
    //It reads when click on the button
    resetDescriptive(btnOrganize);

    //It reads inputs and generates the variable object if it wasn't given
    variable == undefined ? variable = readInput() : variable = variable
    
    //It generates the frequencies table
    generateTable(variable);

    //It generates mean, mode and median
    statisticalVariables(variable, btnOrganize)

    //It generates the variable graphs
    descriptiveChart(variable.type);

    return false
}