/**
 * Binomial Distribution button: it takes the input from the user and then calculates the probability
 * of has some number of sucess in some sucess/failure sample of events.
 */
function btnBinomial() {
    //Resets the HTML
    document.getElementById('binomial-error').innerHTML = ''

    let p = Number(document.getElementById('binomial-sucess').value); //Binomial sucess rate value
    let n = Number(document.getElementById('binomial-sample').value); //Binomial sample length
    let q = 0 //Binomial failure rate value.
    let data = document.getElementById('binomial-ocurrences').value; //Number of ocurrences desired for analysis
    
    //It reads the data
    data = csvToArray(data);

    //It creates the html tags to receive the processed input
    let results = document.getElementById('probability-values')

    if(results.innerHTML == "") probabilityElements();

    //It looks for errors in input
    let validate = inputValidate(p, n, data)

    if(isNaN(validate))  {
        document.getElementById('probability-values').innerHTML = ''
        document.getElementById('binomial-error').innerHTML = validate
        return false
    }

    //Calculating the sucess and failure rates in decimal
    p = (p/100);   
    q = 1 - p

    //Calculating the distribution properties
    let mean = n*p 
    let standardDeviation = Math.sqrt(n*p*q)

    //Only one event was entered
    if (data.length == 1) {

        k = Number(data[0]) //Number of succeed events desired      

        //Calculating the probabilities
        let minProbability = 0 //The probability of getting at least 'k' sucess
        let maxProbability = 0 //The probability of getting at most 'k' sucess
        let probability = combination(n,k)*Math.pow(p, k)*Math.pow(q, n-k) 

        for(i = k; i <= n; i++) {
            minProbability += combination(n, i)*Math.pow(p, i)*Math.pow(q, n-i)
        }

        //The max probability is the complementary probability plus the probability of find the event itself
        maxProbability = 1 - minProbability + probability

        //Output
        document.getElementById('probability').innerHTML = `Probabilidade de se obter sucesso em ${k} eventos: ${(probability*100).toFixed(4)}%`
        document.getElementById('minimum-probability').innerHTML = `Probabilidade de se obter sucesso em no mínimo ${k} eventos: ${(minProbability*100).toFixed(4)}%`
        document.getElementById('maximum-probability').innerHTML = `Probabilidade de se obter sucesso em no máximo ${k} eventos: ${(maxProbability*100).toFixed(4)}%`
        document.getElementById('mean').innerHTML = `Média: ${mean.toFixed(4)}`
        document.getElementById('standardDeviation').innerHTML = `Desvio Padrão: ${standardDeviation.toFixed(2)}`

    }

    //More than one more events were entered
    if(data.length > 1){     
        let probability = 0

        data.forEach(k => {
            k = Number(k)
            probability += combination(n,k)*Math.pow(p, k)*Math.pow(q, n-k)
        })

        //Output
        document.getElementById('probability').innerHTML = `Probabilidade: ${(probability*100).toFixed(2)} %`
        document.getElementById('mean').innerHTML = `Média: ${mean.toFixed(4)}`
        document.getElementById('standardDeviation').innerHTML = `Desvio Padrão: ${standardDeviation.toFixed(2)}`
    }

    hideProbabilityElements();

    return false
}

/**
 * It validates the input in the binomial distribution form
 * @param {Number} p Sucess rate
 * @param {Number} n Sample length
 * @param {Array} data Number of desired sucess events
 */
function inputValidate(p, n, data){

    data.forEach((value, index) => {
        data[index] = Number(value)
    });

    if(p > 100 || p < 0) return 'A probabilidade de ocorrência de um evento deve ser um número entre 0 e 100'
    if(n < 0) return 'O tamanho da amostra deve ser um número positivo' 
    if(data.length > n+1) return 'O número de eventos deve ser menor que o tamanho da amostra'
    if(data.filter(value => {return isNaN(value)}).length > 0) return 'Utilize números para representar a quantidade de sucessos desejada'
    if(Math.max(...data) > n) return "O evento com maior número de sucessos deve ser menor que o tamanho da amostra"

    //It verifies if there's two equal sucess rate.
    let counter = 0;

    for (i = 0; i < data.length; i++) {
        counter = 0        
        data.some(value => {
            // console.log('passei aqui')
            if (data[i] == value) counter++
            if (counter > 1) return true
            else return false
        });
        
        if(counter > 1) {
            break      
        }
    }

    if (counter > 1) return 'Não pode haver duas quantidades de sucessos com o mesmo valor.'

    return 1
}