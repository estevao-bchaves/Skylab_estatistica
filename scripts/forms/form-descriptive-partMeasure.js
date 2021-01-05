/**
 * It reads the measures of position field in the HTML and generantes the 
 * correspondent values in the partMeasure field
 * @param {Object} measure HTML select button to be readed
 * @param {Object} partMeasure HTML select button to be filled.
 */
function partMeasureForm(measure,  partMeasure){    
    let cond
    measure = document.getElementById(measure);
    partMeasure = document.getElementById(partMeasure);
    partMeasure.innerHTML = '';
    if(measure.value == 'quartil') cond = 4
    if(measure.value == "quintil") cond = 5 
    if(measure.value == "decil") cond = 10
    if(measure.value == "percentil") cond = 100
        for(let i = 0; i < cond; i++){
            let newOption = document.createElement("option");
            newOption.value = `${i + 1}`
            newOption.innerHTML = `${i + 1}`
            partMeasure.options.add(newOption)
    }
}