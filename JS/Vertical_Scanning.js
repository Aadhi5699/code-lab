var longestCommonPrefix = function(strs) {
  //vertical scanning
  for(let i=0; i<strs[0].length; i++){
    for(let str of strs){
        if(str[i] !== strs[0][i]){
            return str.slice(0,i)
        }
    }
  }
  return strs[0];
};