function mutipleBy5(num){
    this.num = num 
    return num*5
}

mutipleBy5.power = 2 

console.log(mutipleBy5);
console.log(mutipleBy5.power);
console.log(mutipleBy5.prototype);

function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this/this.score}`);
}

const chai = new createUser("chai",25)
const tea = username("tea",250)

chai.printMe()