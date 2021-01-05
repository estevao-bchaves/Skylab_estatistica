/**
 * It calculates and shows the output from correlation form
 * @param {Boolean} future It verifies if the user is using the future-form. Default is false
 */
function btnCorrelation(future = false) {
    //It verifies if the future-form is being used and returns the correspondent result
    if(future) {
        return btnFuture()
    }

    //Reseting the fields
    document.getElementById('correlation-result').innerHTML = ''
   
    //Reading data
    let xName = document.getElementById('x-name').value;
    let xValues = csvToArray(document.getElementById('xValues').value);

    let yName = document.getElementById('y-name').value;
    let yValues = csvToArray(document.getElementById('yValues').value);

    //Validating the input
    let validate = inputValidate(xValues, yValues);

    if(isNaN(validate)) {
        document.getElementById('correlation-result').innerHTML = validate
        document.getElementById('future-form').style = 'display: none'

        if(window.bar != undefined) window.bar.destroy();
        
        return false
    }

    //Declaring variables
    let r = 0;
    let rType = '';
    let N = xValues.length;
    let xSum = 0;
    let ySum = 0;
    let productSum = 0;

    let xSquareSum = 0;
    let ySquareSum = 0;

    let points = []

    // The final function has the form y = a.x + b
    let b = 0
    let a = 0
    let finalExpression

    /*In this method, the expression to calculate the linear coefficient 'a' is given by two independent 
    big expressions, one divided by the other. So this calculates the coefficient by calculating each 
    expression and doing 'topExpression/bottomExpreesion'at the end. The same will be applied to the
    correlation coefficient 'r' .
    */
    let topExpression = 0; 
    let bottomExpression = 0;
    let rTop = 0;
    let rBottom = 0;

    //Generating the mean
    for (i = 0; i < N; i++) {
        //Turning inputs in numbers
        xValues[i] = Number(xValues[i]);
        yValues[i] = Number(yValues[i]);

        //Calculating the necessary sums
        xSum += xValues[i];
        ySum += yValues[i];
        productSum += xValues[i]*yValues[i]
        xSquareSum += Math.pow(xValues[i], 2);
        ySquareSum += Math.pow(yValues[i], 2);
        

        //Point's object
        points.push({
            x: xValues[i],
            y: yValues[i]
        })
    }

    //Calculating the mean and the correlation coefficient.
    xMean = xSum/N
    yMean = ySum/N
    rTop = N*productSum - xSum*ySum
    rBottom = Math.sqrt((N*xSquareSum - Math.pow(xSum,2))*(N*ySquareSum - Math.pow(ySum,2)))

    //If the denominador is 0, the variables aren't correlated (y is constant)
    if(rBottom == 0) r = 0
    else r = rTop/rBottom;
    rType = correlationVerifier(r);

    //Calculating the top and bottom expressions of the linear coefficient 'a'
    for (i = 0; i < N; i++) {
        topExpression += (xValues[i] - xMean)*(yValues[i] - yMean)
        bottomExpression += Math.pow(xValues[i] - xMean,2)
    }

    //Calculating the coefficients
    a = topExpression/bottomExpression;
    b = yMean - a*xMean

    //Putting the values in the DOM so they can be used later in the future-form
    document.getElementById('angular').innerHTML = a
    document.getElementById('linear').innerHTML = b

    //It verifies the coefficients to print the correct function at the end
    if (a == 0) finalExpression = `Y(X) = ${b}`
    else if (b == 0) finalExpression = `Y(X) = ${a}X`
    else {
        finalExpression = b > 0 ? `Y(x) = ${a.toFixed(2)}X + ${b.toFixed(2)}` : 
                              `Y(x) = ${a.toFixed(2)}X - ${-b.toFixed(2)}`
    }
    
    //Output
    document.getElementById('correlation-result').innerHTML = `<h3>Função de Correlação: ${finalExpression}
    </h3> <h3> Grau de Correlação: ${r.toFixed(2)} </h3> <h3>Tipo de Correlação: ${rType}</h3>`
    document.getElementById('correlation-result').className = "correlation-result"

    //Creating the chart
    correlationChart(finalExpression, a, b, points, xValues, xName, yName);

    // document.getElementByClassName('chart-container').style = 'border: solid'
    document.getElementById('future-form').style = "display: ''"

    return false
}

/**
 * It verifies the how correlated the variables are.
 * @param {Number} r Correlation coefficient
 */
function correlationVerifier(r) {   
        if(r == 1) return 'Perfeita positiva';            
        if(r == -1) return 'Perfeita negativa';            
        if(r == 0) return 'Variáveis não correlacionadas';           
        if(0 < Math.abs(r) && Math.abs(r) < 0.3) return 'Fraca';            
        if(0.3 < Math.abs(r) && Math.abs(r) < 0.7) return 'Moderada'            
        if(0.7 < Math.abs(r) && Math.abs(r) < 1) return 'Forte';            
}


/**
 * It validates the input in correlation form
 * @param {Array} xValues Independent variable's value
 * @param {Array} yValues Dependent variable's value
 */
function inputValidate(xValues, yValues) {
    xValues.forEach((value, index) => {
        xValues[index] = Number(value)
    });

    yValues.forEach((value, index) => {
        yValues[index] = Number(value)
    });

    let xIsThereChar = xValues.filter(value => {return isNaN(value)}).length > 0
    let yIsThereChar = yValues.filter(value => {return isNaN(value)}).length > 0

    if(xValues.length != yValues.length) {
        return `Os conjuntos das variáveis dependentes e independentes devem possuir o mesmo tamanho`
    }

    if(xIsThereChar || yIsThereChar) {
        return "Os valores das variáveis devem conter somente números separados por ','"        
    }

    //It verifies if there's two equal sucess rate.
    let counter = 0;

    for (i = 0; i < xValues.length; i++) {
        counter = 0        
        xValues.some(value => {
            // console.log('passei aqui')
            if (xValues[i] == value) counter++
            if (counter > 1) return true
            else return false
        });
        
        if(counter > 1) {
            break      
        }
    }

    //if (counter > 1) return 'Os valores da variável independente devem ser diferentes entre si'

    return 1
}