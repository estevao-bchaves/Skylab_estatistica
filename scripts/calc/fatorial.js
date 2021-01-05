/**
 * It calculates the fatorial of the number 'n' (n!)
 * @param {Number} n Integer number
 */
function fatorial(n) {
    if (n < 0) return 'Não é possível calcular o fatorial de um número negativo'
    if (n <= 1) return 1
    if (n > 1) return n*fatorial(n-1) 
}

/**
 * It calculates the number of different groups can be made by chosing k elements from n possible elements (n > k)
 * @param {Number} n Integer number
 * @param {Number} k Integer number
 */
function combination(n, k) {
    if(n < k) return 'Número de elementos por grupo é maior que o total de elementos'
    return fatorial(n)/(fatorial(k)*fatorial(n-k))
}