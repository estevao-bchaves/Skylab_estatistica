/**
 * This function reads all the necessary inputs, from the HTML forms or a .csv uploaded file 
 * and returns a single object contaning all the relevant information for the descriptive 
 * statistical analysis.
 * @param {Boolean} reader It checks if the input were came from HTML or from a .csv uploaded file
 */
function readInput(reader = false, search=false) {
    let varName
    let varValues
    let varMeasurePart
    let varMeasureType
    let varScope
    
    //It reads the file that comes from an uploaded .csv file.
    if (reader) {
        let fileValues = csvToArray(reader)
        varName = fileValues[0];
        varValues = fileValues.slice(1, fileValues.length);   
        varMeasurePart = document.getElementById('file-part-measure').value;
        varMeasureType = document.getElementById('file-measures').value;
        varScope = document.querySelector('input[name="file-scope"]:checked').value   
    }

    //It reads the file that comes from the HTML form
    else {
        //It reads variables
        varName = document.getElementById('var-name').value;
        if (varName == '') varName = 'Sem nome';
        varValues = document.getElementById('var-values').value;

        //It formats the values and removes the blank spaces
         varValues = csvToArray(varValues);

         //Taking the values for measures of position calculation
         varMeasurePart = document.getElementById('hand-part-measure').value;
         varMeasureType = document.getElementById('hand-measures').value;

         //Taking the scope of the variable
         varScope = document.querySelector('input[name="hand-scope"]:checked').value
    }    

    //It counts the number of occurrences of each value
    let valuesFi = simpleFrequencies(varValues);
    let varType = readType(valuesFi);
    
    //It merges all the variables values and properties in a single object called varData
    let varData = variableData(varName, varType, varValues, valuesFi, varScope, varMeasureType, varMeasurePart);

    if(search) {
        varData = variableData(varName, varType, varValues, valuesFi, varScope, varMeasureType, varMeasurePart, true)
    }
    
    return varData
}