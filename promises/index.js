 function display(value){
    console.log(value);
}
let mypromises = new Promise(function (myresolve, myreject){

    let x = 11;
    if(x==0){
        myresolve("ok");
    }else{
        myreject("error");
    }

});
mypromises.then(function(value){display(value)},
                 function(error){display(error)})