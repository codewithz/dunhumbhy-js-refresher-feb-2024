// ------------ Callback Approach------------------

// console.log("Before");

// getUser(1023,(user)=>{
//     console.log("User Object Recieved",user);

//     getRepos(user.gitUser,(repos)=>{
//         console.log("Repositories are : ",repos)
//     })
// })

// console.log("After");



// // ---------------- Promise Approach----------------

// console.log("Before");


// const p=getUser(1023);

// p
//     .then((user)=>{
//         console.log("User:",user)
//         return getRepos(user)
//     })
//     .then((repos)=>{
//         console.log("Repos",repos)
//     })
    
//     .catch((error)=>{
//         console.log(error)
//     })

// console.log("After");



// async function displayRepos(){

// const user=await getUser(1012);
// console.log(user)
// const repos=await getRepos(user.gitUser);
// console.log(repos)
// }

const displayRepos=async ()=>{
try {
    const user=await getUser(1012);
    console.log(user)
    const repos=await getRepos(user.gitUser);
    console.log(repos)
    
} catch (error) {
    console.log(error)
}

}

displayRepos()















// ----------------------------------------------------
function getUser(id){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Reading ID from Database ....");
            const userReceivedFromDB={id:id,gitUser:"codewithz"};
            resolve (userReceivedFromDB);
        },2000);
    });
   
}

function getRepos(gitUser){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Connecting to Github [",gitUser,"]....");
            const listOfRepos=["repo1","repo2","repo3"];
            // resolve (listOfRepos);
            reject("connection to git failed")
        },3000)
    })
 
}


function userCallback(user){
    console.log("User Object Recieved",user);
}


// CALLBACK HELL