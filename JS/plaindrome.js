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