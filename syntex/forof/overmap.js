const itrate = new Map([['a',1],['b',2],['c',3]]);
for(let value of map[0]){
   console.log(value);
}
console.log("********");
for(let [key,value] of map){
    console.log(value)
}