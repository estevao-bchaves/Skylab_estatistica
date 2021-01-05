/**
 * It calculates the mean of the given descriptive dataset 
 * by taking the values directly from the dataset table
 * @param {String} varType The variable's statistical type (i.e. quantiative or qualitative)
 */
function mean(varType) {
    
    //Taking the interest variables
    let fiSum = 0;
    let varNames = readTable(1);
    let frequencies = readTable(2);
    let fac = readTable(4);

    //Taking the maxFac, that's the number of values
    let numberOfValues = fac[0];
    for (i = 0; i < fac.length; i++) {
        if (numberOfValues < fac[i]) numberOfValues = fac[i]
    }

    //It's not possible to calculate the mean of a qualitative variable
    if (varType == 'qualitativaOrdinal') return 'Não consta'

    if (varType === 'quantitativaDiscreta') {
        for (i = 0; i < varNames.length; i++) {
            fiSum += Number(varNames[i])*frequencies[i];
        }
    
        let meanValue = (fiSum/numberOfValues).toFixed(2);

        return meanValue
    }

    //If the variable's type is continuous, the mean is calculated by taking the mean of each class interval as value.
    if (varType === 'quantitativaContinua') {
        for (i = 0; i < varNames.length; i++) {
            let varName = varNames[i].split(' ')
            let intervalStart = Number(varName[0]);
            let intervalEnd = Number(varName[varName.length - 1]);

            varNames[i] = (intervalStart + intervalEnd)/2;
            fiSum += Number(varNames[i])*frequencies[i];
        }

        meanValue = (fiSum/numberOfValues).toFixed(2);
        
        return meanValue
    }
}