// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "pratiksha",
            lastname: "makde"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
const Object1= {1: "a", 2:"b"}
const Object2 = {3: "a", 4:"b"}
const object4 = {5: "a", 5:"b"}

// const object3 = {Object1, Object2}
// const object3 = Object.assign({}, Object1, Object2, object4)

const object3 = {...Object1, ...Object2, ...object4}
// console.log(object3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "pratiksha"
}

// course.courseInstructor

const {courseInstructor} = course

console.log(courseInstructor);

