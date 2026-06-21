function getCount(str) {
  let vowels = ['a','e','i','o','u'];
  return str.split('').filter(letter=>vowels.includes(letter)).length;
}

function panic(str){
    let result = [];
    for(let i=0;i<str.length;i++){
        if(str[i]=== " "){
            result.push(" 😱 ");
        }else{
            result.push(str[i].toUpperCase());
        }
    }
    result.push("!");
    return result.join("");
}


// Test your function
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))
