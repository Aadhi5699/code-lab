// with hash map

var twoSum = function(numbers, target) {
    const map = new Map();

    for(let i=0; i<numbers.length; i++){
        const answer = target - numbers[i] ;

        if(map.has(answer)){
            return [map.get(answer) +1, i+1]
        }

        map.set(numbers[i], i)
    }
};


// Two pointers

var twoSum = function(numbers, target) {
 let left = 0;
 let right = numbers.length -1;

 while (left < right){
    let sum = numbers[left] + numbers[right];
    if(sum === target){
        return [left +1, right+1];
    }else if(sum < target){
        left++;
    }else{
        right--;
    }
 }

};