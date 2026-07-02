function accum(s) {
return  s.split('').
map((char, index)=> char.toUpperCase() + char.toLowerCase().repeat(index))
  .join('-');
}