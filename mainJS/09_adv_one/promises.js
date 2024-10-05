const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //DB calls, crytography, network
    setTimeout(function(){
        console.log('async task is compelete');
        resolve() 
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve() 
    },1000)
}).then (function(){
    console.log("async 2 resolve");
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"prii", email: "pri@gmail.com"})
    },1000)
})

promiseThree.then(function(username){
    console.log(username);
    
})

const promiseFour = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:Prii, password:"1234"})
        } else {
            reject('ERROR:something went wrong')
        }
    },1000)
})
promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=> console.log("the promise is either resolved or rejected"))


const promiseFive = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:Prii, password:"1234"})
        } else {
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

