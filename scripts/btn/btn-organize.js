/**
 * It sorts the output by it's simple frequency (table and graphs)
 */

function btnOrganize() {
    let dataType = document.getElementById('import-select').value;
    
    if (dataType == 'file') readFile(true)
    
    else {
        //Reading the necessary values
        let variable = readInput();

        //Organizing the frequencies by crescent order
        quickSort(variable.data, (a,b) => {
            if (a.fi == b.fi) {
                return a.value < b.value
            } else {
                return a.fi < b.fi
            }
            
        });

      
        //From here, we are updating all values in html. The median and measures of position can't change by ordering.
        btnCalculate(variable, true);
    }

}


function change(obj) {
    if($(obj).is(":checked")){
        btnOrganize()
    }else{
        btnCalculate()
    }      
}