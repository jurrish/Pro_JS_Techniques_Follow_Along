//Non-destructive
//forEach and map

let arr = ['a', 'b', 'c' ];

//forEach iterates over the array
//hands current element and it's index to a function

arr.forEach(function(elem, index){
  console.log(index + '. ' + elem)
});


let arr1 = [1,2,3];
let moddedArr = [];

arr1.forEach((ele) => {
  let newVal = ele * 2;
  console.log(this);
  moddedArr.push(newVal);
});

console.log(moddedArr);
