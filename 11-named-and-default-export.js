// -------- One.js -- can have n number of named
//  export but can have only one default export


export function test(){

}

export function anotherTest(){

}

export default function mainFunctionOfOne({

})




// functions or variables or classes or Components which are named exported,
// while imporing them we need to add {} in import statement 

// functions or variables or classes or Components which are default exported,
// while imporing them we do not need to add {} in import statement 

// ------------- Two.js 
import {test,anotherTest},mainFunctionOfOne from One

