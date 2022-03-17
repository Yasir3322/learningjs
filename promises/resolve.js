function resolved(result){
     console.log("resovles");
}

function rejected(result){
    console.log(result);
}

Promise.resolve(new Error("pass")).then(resolved,rejected);
Promise.reject(new Error("fail")).then(resolved,rejected);