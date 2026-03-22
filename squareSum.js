function squareDigits(num){
  //["9","1","1","9"]->["81","1","1","81"]->["811181"]->811181
  return Number(num.toString().split('').map(num=>num*num).join(''));
}
