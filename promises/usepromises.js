let mypromises = new Promise(function(myresolve,myreject){
    setTimeout(function(){
        myresolve("i love u");
    },2000)
})
mypromises.then(function(value){
    console.log(value);
})