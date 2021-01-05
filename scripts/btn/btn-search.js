/**
 * It seaches for some value in the data variable and returns it's information
 */
function btnSearch(){
    let input
    let variable = readInput(false, true);
    let searchValue = document.getElementById("search-value").value

    //Verifying if the searchValue is a number or a string
    if(isNaN(Number(searchValue))){
        input = searchValue
    } else{
        input = Number(searchValue)
    }

    //Organizing the frequencies by crescent order
    // quickSort(variable.data, (a,b) => {
    //     if (a.fi == b.fi) {
    //         return a.value < b.value
    //     } else {
    //         return a.fi < b.fi
    //     }
    // });

    //Searching a value in the 
    let search = binarySearch(variable.data, input, (obj, busca) => {
        if(obj.value === busca) return 0
        else if(busca < obj.value) return -1
        else return 1
    })

    //If the value was not found.
    if(search == -1) {
        document.getElementById('search-result').style = ''
        document.getElementById('search-result').innerHTML = `Valor não encontrado`
    }

    //Returning the values properties
    else {
        
        document.getElementById('search-result').style = ''
        document.getElementById('search-result').innerHTML = `
            <h3 id='search-result-fi'>Frequência simples: ${variable.data[search].fi}</h3>
            <h3 id='search-result-fac'>Frequência acumulada: ${variable.data[search].fac}</h3>
        `
    }
}