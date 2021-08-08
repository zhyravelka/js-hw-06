import users from "./users.js";


// const getUsersWithAge = (users, min, max) =>users.filter((user)=>{
// if(min<=user.age && user.age<= max){
//     return user;}
// })
const getUsersWithAge = (users, min, max) =>users.filter(({age})=> age>= min && age<= max);


console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
