/**
 * It calculates the simple frequency (number of occurrences) of each value
 * @param {Array} varValues Array contaning the user's input of variable values
 */
function simpleFrequencies(varValues) {
    let simpleFrequencies = {};

    varValues.forEach(value => {
        !(value in simpleFrequencies) ? simpleFrequencies[value] = 1 :  simpleFrequencies[value] += 1
    });

    return simpleFrequencies;
}

/**
 * It generates an object containing the variable's processed data
 * @param {String} varName Variable's name
 * @param {String} varType Variable's statistical type (i.e. quantiative or qualitative)
 * @param {Array} varValues Array contaning the user's input of variable's values
 * @param {Object} valuesFi Object contaning the simple frequency (fi) for each variable
 * @param {String} varScope Variable's scope (i.e. sample or population)
 * @param {String} varMeasureType It sets in how many parts the dataset will be divided
 * @param {String} varMeasurePart The desired fraction of the dataset
 */
function variableData(varName, varType, varValues, valuesFi, varScope, varMeasureType, varMeasurePart, search=false) {    
    let frequencies = [];
    let fac = 0;
    let numberOfValues = varValues.length;
    let orderedKeys = Object.keys(valuesFi);

    if (varType === 'quantitativaContinua') {
        //If the search button were clicked, we just want the organized vector
        if(search) {
            for (let i = 0; i < orderedKeys.length; i++) {
                orderedKeys[i] = Number(orderedKeys[i]);
            }
        }

        //Organizing the vector for continuous variable
        else {
            //Max and Min values
            let min = Math.min(...varValues);
            let max = Math.max(...varValues);

            //Calculating the classInterval
            let amplitude = max - min       
            let k = Math.round(Math.sqrt(numberOfValues)); 
            let classInterval = Math.ceil(amplitude/k);

            //Constructing the new valuesFi values, counting how many values are in each classInterval
            let countinuousFi = {}
            
            //Creating a new object, counting how many values are in each defined interval
            for(let i = min; i <= max; i += classInterval){
                let key = `${i} &vdash; ${i + classInterval}`;
                countinuousFi[key] = varValues.filter(value => value >= i && value < i + classInterval).length
            }

            //Updating the values
            valuesFi = countinuousFi;
            orderedKeys = Object.keys(valuesFi);
        }

    }

    //If varType == 'quantitativaDiscreta', changes the type of each value in orderedKeys to Number.
    if (varType == 'quantitativaDiscreta') {
        for (let i = 0; i < orderedKeys.length; i++) {
            orderedKeys[i] = Number(orderedKeys[i]);
        }
    } 
    
    //It sorts the values in crescent order
    if (varType != 'quantitativaContinua') quickSort(orderedKeys, (a,b) => a < b);

    //It makes the data proprierty of the object, contaning all statistical values.
    for (key of orderedKeys) {
        let fi = valuesFi[key];
        fac += fi;

        frequencies.push({
            value: key,
            fi: fi,
            percentualFi: `${(100*fi/numberOfValues).toFixed(2)}%`,
            fac: fac,
            /*The values were all rounded, it's necessary to verify if the final percentage is above 100%. 
            The error margin were defined as 0.5%*/
            percentualFac: 100*fac/numberOfValues > 99.5 ? `100.00%` : `${(100*fac/numberOfValues).toFixed(2)}%`
        });
    }

    //Final Object
    return {
            name: varName, 
            type: varType, 
            scope: varScope, 
            data: frequencies, 
            keys: orderedKeys, 
            measurePart: varMeasurePart, 
            measureType: varMeasureType
    };
}
