function sortByDuration(data, flightLength){
  for(let i=0;i<data.length-1;i++){
    for(let j=0;j<data.length -1 -i;j++){
        if(flightLength <= 60){
            //asc
            if(data[j].duration > data[j+1].duration){
                let temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
            }
        }else{
            if(data[j].duration < data[j+1].duration){
                let temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
            }
        }
    }
  }
  for (let i = 0; i < data.length; i++) {
        console.log(
            `${i + 1}. ${data[i].title}, ${data[i].duration} minutes`
        );
    }
}