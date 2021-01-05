/**
 * It generates the correlation chart
 * @param {String} functionLabel The curve function's label
 * @param {Number} b Linear coeficient
 * @param {Number} a Angular coeficient
 * @param {Object} points Input geometric point's object 
 * @param {Array} xValues The independent variable values
 * @param {Array} xLabel Independent variable's name
 * @param {Array} yLabel Dependent variable's name
 */
function correlationChart(functionLabel, a, b, points, xValues, xLabel, yLabel) {

    //The HTML element that'll receive the chart
    let ctx = document.getElementById('chart-correlation').getContext('2d');

    //It excludes the previous chart if another one is generated
    if(window.bar != undefined) window.bar.destroy();

    let linearFunction = []

    //Getting the max and the min value of independent variable
    let minValue = Math.floor(Math.min(...xValues) - 1)
    let maxValue = Math.floor(Math.max(...xValues) + 1)

    //Generating the function
    for (i = minValue; i < maxValue; i ++) {
        linearFunction.push({
            x: i,
            y: a*i + b
        })
    }

    //Creating the chart
    let data = { 
        datasets: [{
            label: functionLabel,
            data: linearFunction,
            borderColor: "Black",
            pointRadius: 0,
            fill: false,
            type: 'line'
        }, 
        {
            data: points,
            pointBackgroundColor: 'Red',
            pointRadius: 5,
            fill: false,
            showLine: false,
        }]
    }

    window.bar = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {        
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    type: 'linear',
                    scaleLabel:{
                        display: true,
                        labelString: yLabel
                    },
                    ticks: {
                        //min: Math.floor(a) - 10,
                        //max: Math.floor(b*maxValue + a) + 12
                    }
                }],
                xAxes: [{
                    type: 'linear',
                    scaleLabel:{
                        display: true,
                        labelString: xLabel
                    },
                    ticks: {
                       // min: minValue,
                        //max: maxValue
                    }
                }]
            },
            
            legend: {
                labels: {
                  filter: function(item, chart) {
                    return item.datasetIndex !== 1 
                  }
                }
              }
                
        }
    });
}