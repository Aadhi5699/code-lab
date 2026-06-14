function squareDigits(num){
  //["9","1","1","9"]->["81","1","1","81"]->["811181"]->811181
  return Number(num.toString().split('').map(num=>num*num).join(''));
}

var isSquare = function(n){
  if (n < 0) return false;
  return Number.isInteger(Math.sqrt(n));
}