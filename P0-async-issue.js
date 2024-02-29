console.log("Before");
const user=getUser(1023);
console.log(user)
console.log("After");


// ----------------------------------------------------
function getUser(id){
    setTimeout(()=>{
        console.log("Reading ID from Database ....");
        return {id:id,gitUser:"codewithz"}
    },2000);
}


// Solutions 
// 1. Callback 
// 2. Promises
// 3. Async Await