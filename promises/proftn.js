function checkmail(){
    return new Promise((resolved , rejected) => { 
        if(Math.random() > 0.5){
            resolved("mail has arrieved");
        }else{
            rejected(new Error("failes"));
        }
    });
}

checkmail()
.then((mail)=>{
    console.log("mail has recieves");
})
.catch((err)=>{
    console.error("erorr");
})
.finally(()=>{
    console.log("expirement completed");
})