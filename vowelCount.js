function getCount(str) {
  let vowels = ['a','e','i','o','u'];
  return str.split('').filter(letter=>vowels.includes(letter)).length;
}
