Promise.resolve()
  .then(() => {
    console.log("X"); 
    throw new Error("Fail"); 
  })
  .then(() => console.log("Y"))
  .catch((err) => console.log(err.message)) 
  .then(() => console.log("Z")); 


  Promise.reject("Error")
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err);
    return "Recovered";
  })
  .then((msg) => console.log(msg));

// Promise.all for parallel
function getUser() {
  return Promise.resolve("User");
}

function getPosts() {
  return Promise.resolve("Posts");
}

Promise.all([getUser(),getPosts()]).then((result)=>console.log(result));