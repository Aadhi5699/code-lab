const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

var min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}


function flatten(arr){
  let result=[];
  for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
        for(let j=0;j<arr[i].length;j++){
            result.push(arr[i][j]);
        }
    }else{
        result.push(arr[i]);
    }
  }
  return result;
}