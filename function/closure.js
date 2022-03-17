function outer(){
    let a = 3;

    function inner(){
        let b =5;
        console.log(a+b);
    }
    return inner();
}
let x = outer();

console.dir(x);