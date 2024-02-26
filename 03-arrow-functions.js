// In JS -- functions are first class passengers -- 

//  they can be assigned to a variable
// they can be passed as a parameters 


function sayHello(){
    console.log("Hello");
}

// Arrow Function -- it can be assigned to a variable and it can be passed to a function as 
// parameter -- anonymous 

// Arrows 
//  ->  Arrow 
// =>  Fat Arrow

const v1=()=>{
    console.log("Hello");
}

v1();

// -----------------------------------

function squareMe(number){
    return number*number;
}

const sq=(number)=>{
    return number*number;
}

console.log(sq(4))

//  If your arrow function have a single parameter 
// we can skip the ()

const sq1=number=>{
    return number*number;
}
console.log(sq1(5))

// if your function contains a single statement
//  we can get rid of {} and return keyword 
// {} and return are always either together or absent

//  if the statement is an executable statement console.log -- it will execute
//  if the statement is a value --- it will be returned


// function squareMe(number){
//     return number*number;
// }


const sq2=number=> number*number;

const sq3=(number)=> number*number;

console.log(sq3(7))

// ------------------------------------

function addMe(a,b,c){
    return a+b+c;
}

(a,b,c)=>a+b+c;


//  ---------------------------------------

function calculation(x,y,z){
    const a=x+3;
    const b=y+5;
    const c=z-b;

    return a+b+c;
}


let c=(x,y,z)=>{
    const a=x+3;
    const b=y+5;
    const c=z-b;

    return a+b+c;
}




