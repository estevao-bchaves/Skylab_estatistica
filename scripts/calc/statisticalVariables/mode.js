/**
 * It calculates the mode of the given descriptive dataset
 * by taking the values directly from the dataset table
 * @param {String} varType Variable's statistical type (i.e. quantiative or qualitative)
 */
function mode(varType) {

    let mode = [];

    //Taking the table values of interest
    let varNames = readTable(1);
    let frequencies = readTable(2);

    //Determining the higher frequency value
    maxFrequency = frequencies[0];
    for (i = 0; i < frequencies.length; i++) {
        if(frequencies[i] > maxFrequency) maxFrequency = frequencies[i];
    }

    //Determining the value(s) that has the highest frequency calculed before
    for(i = 0; i < frequencies.length; i++) {
        if (frequencies[i] == maxFrequency) {
            mode.push(varNames[i])
        }
    }

    //If there isn't a lowest value, there's no mode
    if (mode.length == varNames.length) return 'Não existe moda'

    //If the variable is '''continuous''', calculates the mode by verifying the mean of each class interval
    if (varType === 'quantitativaContinua') {        
        for(i = 0; i < mode.length; i++) {
            let stringList = mode[i].split(' ')
            let intervalStart = Number(stringList[0]);
            let intervalEnding = Number(stringList[stringList.length - 1]);

            mode[i] = ((intervalStart + intervalEnding)/2).toFixed(2);
        }
    } 
    
    return mode;
}