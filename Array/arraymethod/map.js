let arr = [1,2,3,4,5];

// const newArr = arr.map(Math.sqrt);
const newArr = arr.map(function(l){

    return l*l;

})
console.log(newArr);