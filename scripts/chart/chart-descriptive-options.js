/**
 * It generates the style of the graph for each variable's statistical type
 * @param {String} varType Variable's statistical type
 * @param {Array} percentage Array contaning the percentage of each value
 */
function chartOptions(varType, percentage) {

    if (varType === "quantitativaContinua") {
        let options = {
                plugins: {
                    labels: {
                        render: (args) => {return percentage[args.index]},
                        position: 'outside',
                        fontStyle: 'bold'
                    },
                },
        
                legend: {
                    display: false
                },
        
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem) {
                               return tooltipItem.yLabel;
                        }
                     }
                },
        
                responsive: true,

                maintainAspectRatio: false,

                scales: {

                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
                        },
                        categoryPercentage: 1.0,
                        barPercentage: 1.0
                    }]
                },

                layout: {
                    padding: {
                        top: 25
                    }
                }
            }

            return options
        }

    if (varType === 'quantitativaDiscreta') {
        let options = {
            plugins: {
                labels: {
                    render: (args) => {return percentage[args.index]},
                    position: 'outside',
                    fontStyle: 'bold'
                },
            },
    
            legend: {
                display: false
            },
    
            tooltips: {
                callbacks: {
                    label: function(tooltipItem) {
                           return tooltipItem.yLabel;
                    }
                 }
            },
    
            responsive: true,
            maintainAspectRatio: false,
            
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
            },

            layout: {
                padding: {
                    top: 25
                }
            }
        }

        return options
    }

    if(varType === 'qualitativaOrdinal') {
        let options = {
                plugins: {
                    labels: {
                        render: (args) => {return percentage[args.index]},
                        position: 'outside',
                        fontStyle: 'bold',
                        fontSize: 15
                    },
                },

                legend: {
                    display: true,
                    position: 'right'
                },

                tooltips: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.yLabel;
                        }
                    }
                },

                responsive: true,
                maintainAspectRatio: false,

                scales: {
                    xAxes: [{
                        display: false,
                    }],
                    yAxes: [{
                        display: false,
                    }]
                }
            }

            return options
    }
}