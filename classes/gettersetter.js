class mycompany{
    constructor(brand){
        this.companyName = brand;
    }

    get name(){
        return(this.companyName);
    }
    set name(c){
        this.companyName = c;
    }
}

let myName = new mycompany();
myName.name = "jkdj";
console.log(myName);