//loop
for(var i = 0; i < 5; i++){
  console.log(i);
}

var arr = [0,1,2,3,4];
for(var i in arr){
  console.log(arr[i]);
}

var map = {
  a: 'hoge',
  b: 'fuga'
};
for(var key in map){
  console.log(map[key]);
}

//loop function
arr.forEach(function(val){
  console.log(val);
});

arr.map(function(val){
  return val * 2;
}).forEach(function(val){
  console.log(val);
});

console.log(arr);
