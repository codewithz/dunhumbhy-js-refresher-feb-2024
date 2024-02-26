// {
//     name:value 
// }

const person={
    name:"Zartab Nakhwa",
    age:33,
    blog:"www.codewithz.com",
    walk(){
        console.log("Walking")
    }

};

console.log(person);

person.walk()
// --------- dot operator
person.city="Mumbai"

console.log("----------------------------------------------")
console.log(person)

// --------- [] operator

person["qualification"]="Masters in Information Tech";

console.log("----------------------------------------------")
console.log(person)


console.log("----------------------------------------------")

let targetName="car"
let targetValue="Nissan Sunny"

person[targetName]=targetValue;

console.log("----------------------------------------------")
console.log(person)




