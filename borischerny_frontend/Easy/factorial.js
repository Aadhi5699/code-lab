function factorial(n){
    //6 * i
    if(n<0) return -1;
    if (n == 0 || n== 1) return 1;

    let result =1;
    for(let i=n; i>1; i--){
        //6,5,4,3,2
        result *= i; 
    }
    return result
}