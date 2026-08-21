//reduce([1, 2, 3, 4], (a, b) => a + b, 0) // 10


function reduce(arr, callback, initialValue){
    let accumulator = initialValue;

    for(let i=0; i<arr.length; i++){
        accumulator = callback(accumulator, arr[i], i, arr)
    }
    return accumulator;
}