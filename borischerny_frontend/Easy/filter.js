//filter([1, 2, 3, 4], (n) => n < 3) // [1, 2]

function filter(arr, callback){
    let result =[];
    for(let i=0; i< arr.length; i++){
        if(callback(arr[i], i, arr)){
            result.push(arr[i]);
        }
    }
    return result;
}