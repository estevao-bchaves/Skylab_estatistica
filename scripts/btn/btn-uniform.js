/**
 * Uniform Distribution button: it takes the input from the user to specify an uniform distribution and
 * calculates it's mean and standard deviation of the distribution. It also calculates the probability of 
 * find some interval in the given distribution
 */
function btnUniform() {
    //Reseting variables
    document.getElementById('uniform-error').innerHTML = ''
    document.getElementById('probability-values').innerHTML = ''

    let distributionMin = Number(document.getElementById('uniform-distribution-min').value);
    let distributionMax = Number(document.getElementById('uniform-distribution-max').value);
    let value = Number(document.getElementById('uniform-value-min').value);
    let maxValue = Number(document.getElementById('uniform-value-max').value);
    let intervalType = document.getElementById('uniform-select').value;

    //The distribution have to make sense: it's min must be lesser than it's maximum
    if (distributionMax <= distributionMin){
        document.getElementById('uniform-error').innerHTML = 
        `O valor mínimo da distribuição deve ser menor que o seu máximo`
        return false
    } 

    //The chosen value to analisys must in the distribution
    if (value < distributionMin || value > distributionMax){
        document.getElementById('uniform-error').innerHTML = 
        `O valor a ser analisado deve se encontrar no intervalo [min, max] estabelecido`
        return false
    }
   
    let probability

    //Calculating the distribution properties
    let distribution = 1/(distributionMax - distributionMin);
    let mean = (distributionMin + distributionMax)/2
    let standardDeviation = Math.sqrt(Math.pow(distributionMax - distributionMin, 2)/12);
    let variance = mean == 0 ? 'Não é possível calcular a variância (média = 0)' : standardDeviation/mean

    //Generating the probability for each interval type
    if (intervalType == 'between') {
        if (maxValue < distributionMin || maxValue > distributionMax) {
            document.getElementById('uniform-error').innerHTML = `
            O valor a ser analisado deve se encontrar no intervalo [min, max] estabelecido`
            return false
        }

        if(maxValue < value) {
            document.getElementById('uniform-error').innerHTML = 
            `O valor mínimo do intervalo deve ser menor que seu valor máximo`
            return false
        }

        probability = (maxValue - value)*distribution
    } 

    if(intervalType == 'lesser-than') probability = (value - distributionMin)*distribution
    if(intervalType == 'higher-than') probability = (distributionMax - value)*distribution

    //Generating the html tags to receive the processed input
    probabilityElements()

    //Output
    document.getElementById('uniform-error').innerHTML = ``
    document.getElementById('probability').innerHTML = `Probabilidade: ${(probability*100).toFixed(2)}%`
    document.getElementById('mean').innerHTML = `Média: ${mean}`
    document.getElementById('standardDeviation').innerHTML = `Desvio Padrão: ${standardDeviation.toFixed(2)}`
    
    if(isNaN(variance)) document.getElementById('variance').innerHTML = `Variância: ${variance}`
    else document.getElementById('variance').innerHTML = `Variância: ${(variance*100).toFixed(2)}%`
    
    hideProbabilityElements()

    return false
}