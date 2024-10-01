//if
const isUserloggedIn = true
const temperature = 41
// if (temperature === 51) {
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }
// console.log("execute");

// >, <, <=, >=, ==, !=, ===, !==

// const score = 200
// if (score >100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

// const balance = 1000
// if (balance <500) {
//     console.log("less than 500");
// } 

// else if (balance <750){
//     console.log("less than 750");
// }

// else if (balance <900){
//     console.log("less than 900");
// }

// else if (balance <1200){
//     console.log("less than 1200");
// }

const UserloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (UserloggedIn && debitCard && 2==3) {
    console.log("allow to buy course");
}
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("user logged in");
}

