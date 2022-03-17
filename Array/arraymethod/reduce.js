let arr = [4,3,5,6];

let c = arr.reduce(function (pre,curr){
    return pre - curr;
})

console.log(c);