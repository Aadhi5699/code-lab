function fetchData(){
return new Promise((resolve,reject)=>{
setTimeout(()=>{
resolve("Data received");
},1000);
});
}

fetchData().then((data)=>{
console.log(data);
});