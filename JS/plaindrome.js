//Handling alphanumeric

var isPalindrome = function(s) {
   let left = 0;
   let right = s.length -1;
    const isAlphanumeric = (char)=> /[a-zA-Z0-9]/.test(char);
   while(left < right){
    if(!isAlphanumeric(s[left])){
        left++;
        continue;
    }
    if(!isAlphanumeric(s[right])){
        right--;
        continue;
    }
    if(s[left].toLowerCase() !== s[right].toLowerCase()){
        return false;
    }

    left++;
    right--;
   }
   return true;
};

// delete max one mismatch

var validPalindrome = function(s) {
    let left =0;
    let right = s.length-1;

    while(left < right){
        if(s[left] !== s[right]){
            return(isPalindrome(left+1 , right) || isPalindrome (left, right-1));
        }
         left++;
         right --;
    }
    return true;

    function isPalindrome(left, right){
        while(left < right){
            if(s[left] !== s[right]){
                return false;
            }
            left++;
            right --;
        }
        return true;
    }
};