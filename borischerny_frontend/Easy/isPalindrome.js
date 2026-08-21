function isPalindrome(str){
    const cleanedStr = str.replace(/\s/g, '').toLowerCase();

    let left =0;
    let right = cleanedStr.length -1;

    while(left<right){
        if(cleanedStr[left] !== cleanedStr[right]){
            return false;
        }

        left++;
        right--;
    }
    return true;
}