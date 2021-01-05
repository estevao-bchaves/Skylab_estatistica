/**
 * It calculates the  measures of position of the given descriptive dataset
 * by taking the values directly from the dataset table
 * @param {String} varType Variable's statistical type (i.e. quantiative or qualitative)
 * @param {String} varMeasureType It sets in how many parts the dataset will be divided
 * @param {String} varMeasurePart The desired fraction of the dataset
 */
function measuresOfPosition(varType, varMeasureType, varMeasurePart) {

    //It sets in how many parts the dataset we'll be divided
    if(varMeasureType == '' || varMeasurePart == '') return 'Especifique um valor para as medidas separatrizes'
    if(varMeasureType == 'quartil') varMeasureType = 4
    if(varMeasureType == 'quintil') varMeasureType = 5
    if(varMeasureType == 'decil') varMeasureType = 10
    if(varMeasureType == 'percentil') varMeasureType = 100

    varMeasurePart = Number(varMeasurePart);

    //Taking the table values of interest
    let varNames = readTable(1);
    let frequencies = readTable(2);
    let fac = readTable(4);
    let previousFac;

    //Taking the maxFac, that's the number of values
    let numberOfValues = fac[0];
    for (let i = 0; i < fac.length; i++) {
        if (numberOfValues < fac[i]) numberOfValues = fac[i];
    }

    //Declaring the variables of interest
    let position = Math.round((numberOfValues/varMeasureType)*varMeasurePart);
    let i = 0;
 
    //It calculates the highest position of the defined division
    while(position > fac[i]) i++ 
    
    let measure = varNames[i];
    let fi = frequencies[i];
    
    //It calculates the measure of position for each type of variable
    if (varType == 'quantitativaContinua') { 
        let varName = varNames[i].split(' ')
        let intervalStart = Number(varName[0]);
        let intervalEnd = Number(varName[2])
        let classInterval = intervalEnd - intervalStart;

        /*It verifies if the fac is the first value in the table. So the 
        'previous fac' doesn't exist, so it need to be set to 0*/
        i == 0 ? previousFac = 0 : previousFac = fac[i - 1];
       
        measure = intervalStart + ((position - previousFac)/fi)*classInterval
        measure = measure.toFixed(2);

    /*When taking the median of the dataset, we need to verify if this has 
    a even number of elements to take the mean between the middle values 
    in quantitative discrete case or print these two in the qualitative case*/
    } else if(numberOfValues % 2 == 0 && position + 1 > fac[i] && varMeasurePart/varMeasureType == 1/2){
        if (varType == 'quantitativaDiscreta'){ 
            measure = (Number(varNames[i]) + Number(varNames[i + 1]))/2
            measure = measure.toFixed(2); 

        } else{
            measure = [varNames[i], varNames[i + 1]];
        }
    } 

    return measure == undefined ? "Não consta" : measure
}