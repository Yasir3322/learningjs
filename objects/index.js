const person = {
    name: "yasir",
    age: "21",
    eyecolor: "black",
    gpa:"3.1",
    cars: {
        car1: "98 corolla",
        car2: "honda civic",
        car3: "Baic jeep",
    }
}
// person.nationality = "pakistani";  // dynamic properties.
  person['nationality'] = 'pakistani';  // dynamic properties.
// delete person["age"];
// console.log(Object.values(person));
// console.log(Object.entries(person));

// for(const [key,values] of Object.entries(person)){
//     console.log(`${key} : ${values}`);
// }

console.log(Object.keys(person));