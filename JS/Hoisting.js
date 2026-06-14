//1

var x = 1;

function outer() {
  console.log(x); //undefined
  var x = 2;

  function inner() {
    console.log(x); //undefined
    var x = 3;
    console.log(x); //3
  }

  inner();
  console.log(x); //2
}

outer();
console.log(x); //1



//2

var name = "Global";

(function () {
  console.log(name); // [Function: name]

  var name = "Local";

  function name() {
    console.log("Fn");
  }

  console.log(name); // Local
})(); 