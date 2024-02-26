console.log("----------------- var --------------------")

function sayHello(){

    for(var i=1;i<=10;i++){
        console.log("Value of [i] in the loop is : "+i);
    }
    console.log("----------------------------------------")
    console.log("Value of [i] outside the loop is : "+i);

}

sayHello();

// var 
//  let and const 

console.log("----------------- let --------------------")

function sayHelloWithLet(){

    for(let i=1;i<=10;i++){
        console.log("Value of [i] in the loop is : "+i);
    }

//     console.log("Value of [i] outside the loop is : "+i);
//     ^

// ReferenceError: i is not defined
//     console.log("----------------------------------------")
//     console.log("Value of [i] outside the loop is : "+i);

}

sayHelloWithLet();

console.log("----------------- const -------------------")

const company="Dunhumby"
console.log("Company Name is "+company)

// company =company + " Inc."
// TypeError: Assignment to constant variable.

let companyName="Dunhumby"
console.log("Company Name is "+company)


companyName =companyName + " Inc."
console.log("Company Name is "+companyName)

