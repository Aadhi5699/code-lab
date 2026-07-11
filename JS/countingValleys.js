function countingValleys(steps, path) {
    // Write your code here
     // no.of valleys// -1(D),+1(U)
     //[U]
     let level =0;//-1,-2,-1,0,-1,-2,-1,-2,-1,0
     let valleys =0;//2
     
     for(let i=0; i<path.length; i++){
        if(path[i] === 'U'){
            level++;
            if(level === 0){
                valleys++;
            }
        }else{
            level --;
        }
     }
     return valleys;
     
}