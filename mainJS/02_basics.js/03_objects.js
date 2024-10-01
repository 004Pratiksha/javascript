// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "pratiksha",
    "full name" : "pratiksha makde",
    [mySym] : "mykey1",
    age: 18,
    location: "Nagpur",
    email: "pratiksha@gmail.com",
    isLoggedIn : false,
    lastLogingDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email); // access
// console.log(JsUser["email"]); // access
// console.log(JsUser["full name"]); 
// console.log(JsUser.[mySym]);

JsUser.email= "pratikshaa@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "pratikshaaaaa@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



