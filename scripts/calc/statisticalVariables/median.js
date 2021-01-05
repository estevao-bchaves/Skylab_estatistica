/**
 * It calculates the median of the given descriptive dataset. 
 * (That's the first measure of position for the dataset divided by two parts)
 * @param {String} varType Variable's statistical type (i.e. quantiative or qualitative)
 */
function median(varType){

    //The median is the measure of position where the dataset is divided in two parts.
    let median = measuresOfPosition(varType, 2, 1);

    return median
};