console.log("Before");

getUser(1023,(user)=>{
    console.log("User Object Recieved",user);

    getRepos(user.gitUser,(repos)=>{
        console.log("Repositories are : ",repos)
    })
})

console.log("After");


// ----------------------------------------------------
function getUser(id,callback){
    setTimeout(()=>{
        console.log("Reading ID from Database ....");
        const userReceivedFromDB={id:id,gitUser:"codewithz"};
        callback (userReceivedFromDB);
    },2000);
}

function getRepos(gitUser,callback){
    setTimeout(()=>{
        console.log("Connecting to Github [",gitUser,"]....");
        const listOfRepos=["repo1","repo2","repo3"];
        callback (listOfRepos);
    },3000)
}


function userCallback(user){
    console.log("User Object Recieved",user);
}


// CALLBACK HELL