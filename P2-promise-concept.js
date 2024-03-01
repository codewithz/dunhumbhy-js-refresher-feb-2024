// const p=new Promise((functionToInvokeWhenPromiseIsKept,functionToInvokeWhenPromiseIsBroken)=>{
//                        console.log("Task to be performed");
//                        const taskIsSuccessfull=10
//                         if(taskIsSuccessfull){
//                             functionToInvokeWhenPromiseIsKept("Number:"+taskIsSuccessfull);
//                         }
//                         else{
//                             functionToInvokeWhenPromiseIsBroken("Number was zero")
//                         }

//                         });

// Promise is Asynchronous 


// p
// .then((valueReturnedWhenPromiseIsFullfilled)=>{
//     console.log("Value Returned after Promise was fullfilled",valueReturnedWhenPromiseIsFullfilled)
// })

// .catch((valueReturnedWhenPromiseIsBroken)=>{
//     console.log("Value Returned after Promise was broken",valueReturnedWhenPromiseIsBroken)
// })


const p=new Promise((resolve,reject)=>{
                           console.log("Task to be performed");
                           const taskIsSuccessfull=10
                            if(taskIsSuccessfull){
                                resolve("Number:"+taskIsSuccessfull);
                            }
                            else{
                                reject("Number was zero")
                            }
    
                            });


p
     .then((result)=>{
         console.log("Value Returned after Promise was fullfilled",result)
     })
                            
    .catch((error)=>{
      console.log("Value Returned after Promise was broken",error)
        })