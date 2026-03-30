function maskify(cc) {
 return cc.slice(-4).padStart(cc.length,"#");
}

function arrayDiff(a, b) {
  //a - b
  return a.filter(num=>!b.includes(num));
}

function findOdd(A) {
  //happy coding!
  const count = {};
  for(let num of A){
    count[num]=(count[num] ||0)+1;
  }
  for(let num in count){
    if(count[num] %2 !==0){
      return Number(num);
    }
  }
}