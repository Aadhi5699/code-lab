function missing(arr){
    /**
     *  missing([]) // undefined
        missing([1, 4, 3]) // 2
        missing([2, 3, 4]) // 1
        missing([5, 1, 4, 2]) // 3
        missing([1, 2, 3, 4]) // undefined
     */

    if(!arr || arr.length ===0) return undefined;

    let sum =0;
    let max = arr[0];

    for(const num of arr){
        sum += num;
        if(num > max){
            max = num;
        }
    }

    //(n*n+1/2)

    let expected = max * (max+1)/2
    let diff = expected - sum;

    if(diff > 0){
        return diff;
    }else{
        return undefined;
    }
}