/**
 * Recursive quick sort algorithm.
 * @param {Array} vector Array to be sorted
 * @param {Function} fnComp How the array must be sorted
 * @param {Number} start Array's start
 * @param {Number} end Array's ending
 */
function quickSort(vector, fnComp, start = 0, end = vector.length -1) {
    if (end > start) {
        let pivotPos = end;
        let divPos = start - 1;

        for(let i = start; i < end; i++) {
            //if vector[i] < vector[pivotPos], it exchanges the values's position and increment divPos.
            if (fnComp(vector[i], vector[pivotPos])) {
                divPos++
                [vector[i], vector[divPos]] = [vector[divPos], vector[i]];
            }
        }
    

        divPos++
        [vector[divPos], vector[pivotPos]] = [vector[pivotPos], vector[divPos]];

        quickSort(vector, fnComp, start, divPos - 1)
        quickSort(vector, fnComp, divPos + 1, end)
    }
}