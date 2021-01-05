/**
 * It imports data by reading a .csv file and generates all results. 
 * @param {Boolean} btnOrganize 
 */
function readFile(btnOrganize = false) {
    //It resets when click on the button
    resetDescriptive(btnOrganize);

    let input = document.getElementById('input-file');
    let file = input.files[0];
    
    if ((file.name).slice(file.name.length - 3) != 'csv') {
        document.getElementById('explanation').innerHTML = 'Formato de arquivo inválido.'
    }

    else if (file) {
        let reader = new FileReader()
        reader.readAsText(file);

        reader.onload = function() {
            let variable = readInput(reader.result)

            //It sorts the data in the crescente order
            if (btnOrganize) {
                quickSort(variable.data, (a,b) => {
                    if (a.fi == b.fi) {
                        return a.value < b.value
                    } else {
                        return a.fi < b.fi
                    }
                });
            }
            
            //It generates the frequencies table
            generateTable(variable);

            //It generates the variable graphs
            createChart(variable.type);

            //It generates mean, mode and median
            statisticalVariables(variable, btnOrganize);
        }
    }

    return false
}