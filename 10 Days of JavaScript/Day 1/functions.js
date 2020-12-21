/*
 * Create the function factorial here
 */
function factorial(n){
    let finalValue = 1;
    for(let i=n;i>1;i--){
        finalValue *= i;
    }
    return finalValue;
}