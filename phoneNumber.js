function createPhoneNumber(numbers){
  // dummy values -> looped and replaced with number->return;
  let dummyValue = "(###) ###-####";
  for(let i=0;i<dummyValue.length;i++){
   dummyValue =  dummyValue.replace("#",numbers[i]);
  }
  return dummyValue;
}