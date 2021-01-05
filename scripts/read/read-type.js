/**
 * Identify the variable's statistical type
 * @param {Object} valuesFi Simple frequency object for each entered value
 */
function readType(valuesFi){
    let varType;
    let values = Object.keys(valuesFi)

    values.some(isNaN) ? varType = 'qualitativaOrdinal' :
    values.length < 10 ? varType = 'quantitativaDiscreta':
    varType = 'quantitativaContinua'

    return varType
}