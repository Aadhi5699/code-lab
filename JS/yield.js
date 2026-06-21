 function* print(){
    console.log("A");
    yield 1;
    console.log("B");
    yield 2
    console.log("C");
}

const result = print();

result.next();
result.next(); 