/**
 * Normal Distribution button: it takes the input from the user and calculates the correspondent probability
 * of find some interval as well as the mean and standard deviation of the specified distribution
 */
function btnNormal() {
    //Reseting the normal form
    document.getElementById('normal-error').innerHTML = ''
    document.getElementById('probability-values').innerHTML = ''

    //Declaring variables
    let value = Number(document.getElementById('normal-var-min').value);
    let mean = Number(document.getElementById('normal-mean').value);
    let standardDeviation = Number(document.getElementById('standard-deviation').value);
    let intervalType = document.getElementById('normal-select').value;

    let probability;
    let probabilityMax;

    //The probability of finding a value lesser than variable 'value'
    probability = zScore(value, mean, standardDeviation)

    //Generating the probability for each interval type.
    if(intervalType == 'between') {
        let valueMax = Number(document.getElementById('normal-var-max').value);

        if (value >= valueMax) {
            document.getElementById('normal-error').innerHTML = `O valor inicial deve ser menor que o valor final`
            return false    

        } else {
            probabilityMax = zScore(valueMax, mean, standardDeviation)
            probability = probabilityMax - probability
        }
    }

    if(intervalType == 'higher-than') probability = 1 - probability  

    //Creating the HTML tags
    probabilityElements()

    //Returning the probability value
    if (probability > 1 || probability < 0) probability = 1
    document.getElementById('probability').innerHTML = `Probabilidade: ${(probability*100).toFixed(4)}%`
 
    //Occulting the HTML tags that are not being used
    hideProbabilityElements()

    return false
}

/**
 * Z-Score table for normal distribution. By setting the 'mean' and the 'standard deviation', this function
 * calculates the probability of find a value lesser or equal than x in a normal distribution with the given
 * parameters.
 * @param {Number} x Chosen value for analysis 
 * @param {Number} mean Mean of the normal distribution
 * @param {Number} standardDeviation Standard Deviation of the normal distribution
 */
function zScore(x, mean, standardDeviation) {
    if(standardDeviation < 0) standardDeviation *= -1

    let pi = Math.PI;
    z = (x - mean)/standardDeviation
    let result = 0

    //Taylor approximation for the integral of an normal distribution function, from 0 to z.
    for (n = 0; n < 50; n++) {
        result += Math.pow(-1, n)*Math.pow(z, 2*n+1)/(Math.pow(2,n)*fatorial(n)*(2*n+1))
    }

    return 0.5 + result/(Math.sqrt(2*pi))
}
