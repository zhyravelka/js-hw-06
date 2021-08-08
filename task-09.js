import users from "./users.js";

// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => users
.sort((a, b) => a.friends.length - b.friends.length)
.reduce((acc,user)=>{
    acc.push(user.name);
    return acc;
},[])

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]