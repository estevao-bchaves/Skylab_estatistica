/**
 * It calculates the standard deviation of the given descriptive dataset
 * by taking the values directly from the dataset table
 * @param {Number} mean The mean of the descriptive dataset variable
 * @param {String} varType Variable's statistical type (i.e. quantiative or qualitative)
 * @param {String} varScope Variable's scope (i.e. sample or population)
 */
function standardDeviation(mean, varType, varScope) {

    //There isn't standard deviation for qualitative variables
    if (varType == 'qualitativaOrdinal') return 'Não consta'

    //Taking the table values of interest
    let varNames = readTable(1);
    let frequencies = readTable(2);
    let fac = readTable(4);
    let standardDeviation = 0;
    
    //Taking the highest Fac value
    let maxFac = fac[0]
    for (i = 0; i < fac.length; i++) {
        if(maxFac < fac[i]) maxFac = fac[i]
    }

    //If the varScope is a sample, we need to subtract the maxFac by 1
    if(varScope == 'amostra') maxFac = maxFac - 1

    //It calculates the standard deviation for each type of statistical variable
    if (varType === 'quantitativaContinua') {
        for (i = 0; i < varNames.length; i++) {
            let stringList = varNames[i].split(' ')
            let intervalStart = Number(stringList[0]);
            let intervalEnding = Number(stringList[stringList.length - 1]);

            varNames[i] = (intervalStart + intervalEnding)/2;

            standardDeviation += frequencies[i]*Math.pow(varNames[i] - Number(mean), 2) 
        }
    } else {
        for (i = 0; i < varNames.length; i++) {
            standardDeviation += frequencies[i]*Math.pow(Number(varNames[i]) - Number(mean) , 2);
        }
    };

    standardDeviation = Math.sqrt(standardDeviation/maxFac).toFixed(2);
    
    return standardDeviation
}

/**
 * It calculates the variance
 * @param {Number} standardDeviation Dataset's standard deviation
 * @param {Number} mean Dataset's mean
 */
function variance(standardDeviation, mean) {
    if(standardDeviation == 'Não consta') return 'Não consta'

    return `${((standardDeviation/mean)*100).toFixed(2)}%`
}