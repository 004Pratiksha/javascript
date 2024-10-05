const user = {
    username: "prii",
    loginCount: 8,
    signIn: true,

    getUserDetails: function(){
        // console.log("got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
        
    }
}
// console.log(user);
// console.log(user.getUserDetails());
// console.log(this);


function User (username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }
    return this 
}

const userOne = new User("prii", 12, true)
const userTwo = new User("prii", 11, false)
console.log(userOne.constructor);

// console.log(userOne);
