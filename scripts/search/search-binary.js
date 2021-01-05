function binarySearch(list, value, fnComp) {
    let init = 0
    let end = list.length - 1
    
    while(end >= init) {
        // Math.floor() remove decimals
        let half = Math.floor((end + init) / 2)

        // Call external function
        let res = fnComp(list[half], value)

        if(res === 0) { // Found 
            return half
        }
        else if(res < 0) {
                //excludes half of list      
            end = half - 1
        }
        else {  // res > 0
            init = half + 1
        }
    }
    return -1       // value not found
}