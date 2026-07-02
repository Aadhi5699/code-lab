var numIdenticalPairs = function(nums) {
    // if(i==j || i< j)=>count of good pair
  const map = new Map();
  let count =0;

  for(let i=0;i<nums.length;i++){
    const curr = nums[i];
    count += map.get(curr)||0;
    map.set(curr,(map.get(curr)||0)+1);

  }
  return count;
};