/**
 * It prints on HTML the descriptive statistical output
 * @param {Object} variable Descriptive variable's data
 * @param {Booelan} btnOrganize Verifies if the calculation was pushed
 */
function statisticalVariables(variable, btnOrganize = false) {

    let title = document.createElement('div');
    title.className = 'statistical-title';
    title.innerHTML = 'Medidas Estatísticas:'
    document.getElementById('results-title').appendChild(title);

    //Calculating all the descriptive statistics values
    let dataMean = mean(variable.type);
    let dataMode = mode(variable.type);
    let dataMedian = median(variable.type);
    let dataMeasuresOfPosition = measuresOfPosition(variable.type, variable.measureType, variable.measurePart);
    let dataStandardDeviation = standardDeviation(dataMean, variable.type, variable.scope);
    let dataVariance = variance(dataStandardDeviation, dataMean);

    document.getElementById('mean').innerHTML += `Média: ${dataMean}`
    document.getElementById('mode').innerHTML += `Moda: ${dataMode}`

    /*The measures of position values could not change by ordering the values by fi's crescent order. It's defined
    by the values sorted by crescent order*/
    if (!btnOrganize) {
        document.getElementById('median').innerHTML += `Mediana: ${dataMedian}`
        document.getElementById('measure').innerHTML += `Medida separatriz: ${dataMeasuresOfPosition}`
    } 

    document.getElementById('standard-deviation').innerHTML += `Desvio Padrão: ${dataStandardDeviation}`  
    document.getElementById('variance').innerHTML += `Variância: ${dataVariance}`
}