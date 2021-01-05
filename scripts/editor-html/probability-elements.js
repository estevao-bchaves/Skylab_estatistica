/**
 * It creates the HTML tags to receive the processed user's input.
 */
function probabilityElements () {

    let probability = document.createElement('h3');
    probability.id = 'probability'

    let minimumProbability = document.createElement('h3');
    minimumProbability.id = 'minimum-probability'

    let maximumProbability = document.createElement('h3');
    maximumProbability.id = 'maximum-probability'

    let mean = document.createElement('h3');
    mean.id = 'mean'

    let standardDeviation = document.createElement('h3');
    standardDeviation.id = 'standardDeviation'

    let variance = document.createElement('h3');
    variance.id = 'variance'

    document.getElementById('probability-values').appendChild(probability);
    document.getElementById('probability-values').appendChild(minimumProbability);
    document.getElementById('probability-values').appendChild(maximumProbability);
    document.getElementById('probability-values').appendChild(mean)
    document.getElementById('probability-values').appendChild(standardDeviation);
    document.getElementById('probability-values').appendChild(variance);
}

function hideProbabilityElements() {
    $('#probability-values > h3').each(function() {
        if (this.innerHTML == '') this.style = 'display:none'
    })
}