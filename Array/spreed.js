// function abc(...a){
//    console.log(a);
// }

// abc(3,4,6,7,8);
// console.log(abc());

function add(a,b,c){
    return(a+b+c);
}

let number = [1,2,3];

console.log(add(...number));