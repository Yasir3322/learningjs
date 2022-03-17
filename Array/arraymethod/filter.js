let arr =[2,3,34,4,5];
 
// const result = arr.filter(underage);
// console.log(result);

// function underage(age){
//     return age>18;
// }

const result = arr.filter(function (l){
    return l>18;
})
console.log(result);