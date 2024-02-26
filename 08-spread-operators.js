//  denoted by ...
// can be applied to object or arrays 
// arrays --- [...]
// objects -- {...}


// To spread elements of an array or object into another one 

const first= [1,2,3]
const second=[4,5,6]

// 1,2,3,a,b,c,4,5,6

const combined1=first.concat(["a","b","c"]).concat(second)

console.log(combined1)

// 1,2,3,a,4,5,6,b

const combined2=first.concat("a").concat(second).concat("b");

console.log(combined2);

const combined3=[...first,"a",...second,"b"]
console.log("Combined 3",combined3)

// ------ Spread Operator for Cloning 

const cloneFirst=[...first]
console.log(cloneFirst)

// --------------------------------------------------------
console.log("----------------------------------------------")

const grades=["C","A","B","D"];
console.log("Original:",grades);
// const sorted=grades.sort() -- but it ended up soritng the original array
const sorted=[...grades].sort() 
console.log("After Sorting:",sorted)
console.log("Original:",grades);

// --------- Spread Operator with Objects 

const name={name:"Zartab"}
const job={position:"Corporate Trainer"}

const combinedObject={...name,color:"Black",...job}

console.log(combinedObject);

