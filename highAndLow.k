function highAndLow(numbers){
  // ...str -> int -> each int -> max,min
  //["1","2","3"]
  let strToint = numbers.split(" ");
  let max = Math.max(...strToint);
  let min = Math.min(...strToint);
  
  return `${max} ${min}`;
}



function highAndLow(numbers) {
  const arr = numbers.split(" ");

  let max = Number(arr[0]);
  let min = Number(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    const current = Number(arr[i]);

    if (current > max) {
      max = current;
    }
    
    if (current < min) {
      min = current;
    }
  }
  return `${max} ${min}`;
}
