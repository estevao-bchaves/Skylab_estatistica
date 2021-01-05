/**
 * It generates the header for the descriptive statistical table
 * @param {Object} variable Descriptive variable's data
 */
function createHeader(variable) {
    let headerContent = `
        <td >${variable.name}</td>
        <td class='cell'>Frequência Simples(Fi)</td>
        <td class='cell'>Frequência Simples % (Fi%)</td>
        <td class='cell'>Frequência acumulada (Fac)</td>
        <td class='cell'>Frequência acumulada % (Fac%)</td>
    `

    let header = document.createElement('tr')
    header.className = 'row header'
    header.innerHTML = headerContent

    return header
}

/**
 * It generates one line for the descriptive statistical table
 * @param {Object} variable Descriptive variable's data
 */
function createLine(variable) {
    let lineContent = `
        <td class='cell'>${variable.value}</td>
        <td class='cell'>${variable.fi}</td>
        <td class='cell'>${variable.percentualFi}</td>
        <td class='cell'>${variable.fac}</td>
        <td class='cell'>${variable.percentualFac}</td>
    `

    let line = document.createElement('tr')
    line.className = 'row'
    line.innerHTML = lineContent

    return line
}

/**
 * It generates the complete descriptive table
 * @param {Object} variable Descriptive variable's data
 */
function generateTable(variable) {
    let tableHead = document.createElement('thead');
    tableHead.id = 'table-head'
    tableHead.className = 'table-head'

    let tableBody = document.createElement('tbody');
    tableBody.id = 'table-body'
    tableBody.className = 'table-body'

    document.getElementById('results').appendChild(tableHead)
    document.getElementById('results').appendChild(tableBody)

    //Generating the Header.
    document.getElementById('table-head').appendChild(
        createHeader(variable)
    ); 

    //Generating all lines of the table.    
    variable.data.forEach(valueData => {
        document.getElementById("table-body").appendChild(
            createLine(valueData)
        ); 
    });

    //Creating sortable property for qualitative ordinal variable.
    if (variable.type == "qualitativaOrdinal")  {
        
        document.getElementById("explanation").innerHTML = 
        "<b style='font-size: 20px;'>Clique e arraste para trocar a posição das linhas.</b>"

        //When change the lines of table, updates everything according.
        $('tbody').sortable({
            disabled: false,
            update: function () {
                let fi = readTable(2);
                let percentualFi = [];
                let fac = 0;
                let percentualFac = 0;

                //Taking all percentual Fi's removing the '%' symbol.
                $('tbody td:nth-child(3)').each(function (index) {
                    let value = $(this).text();
                    value = Number(value.slice(0, value.length - 1));
                    percentualFi.push(value);
                });
 
                //Updating fac
                $('tbody td:nth-child(4)').each(function (index) {
                    fac += fi[index];
                    $(this).text(fac);
                });

                //Updating percentualFac
                $('tbody td:nth-child(5)').each(function (index) {
                    percentualFac += percentualFi[index]
                    if (percentualFac > 99.5) percentualFac = 100;
                    $(this).text(`${percentualFac.toFixed(2)}%`)
                });  

                //Updating the median and measureOfPosition
                document.getElementById("measure").innerHTML = `Medida Separatriz: ${measuresOfPosition(variable.type, variable.measureType, variable.measurePart)}`
                document.getElementById("median").innerHTML = `Mediana: ${median(variable.type)}`

                //Updating the chart
                descriptiveChart(variable.type);
            }
        });      
    }
}