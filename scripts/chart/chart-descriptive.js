/**
 * It generates the chart for the descriptive statistics
 * @param {String} varType The statistical type of the given variable
 */
function descriptiveChart(varType) {

    //The HTML element that'll receive the chart.
    let ctx = document.getElementById('chart').getContext('2d');

    //It excludes the previous chart if another one is generated.
    if(window.bar != undefined)
        window.bar.destroy();

    //Creating the chart
    let type = '';
    let labelsList = readTable(1);
    let frequencies = readTable(2);
    let fiPercent = readTable(3);
    let backgroundColor = ['Red', 'Blue', 'Purple', 'Yellow', 'Green', 'Pink', 'Turquoise', 'Orange', 
    'Darkblue', 'bisque', 'forestgreen', 'maroon'];

    varType == 'qualitativaOrdinal' ? type = 'pie': type = 'bar'

    window.bar = new Chart(ctx, {
        type: type,
        data: { 
            labels: labelsList,
            datasets: [{
                label: 'Representação Gráfica',
                data: frequencies,
                backgroundColor: backgroundColor,
                hoverBackgroundColor: '#d9dac0'
            }]
        },
            //It sets the style for each type of chart.
            options: chartOptions(varType, fiPercent)
    });
}