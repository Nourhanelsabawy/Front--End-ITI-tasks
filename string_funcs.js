var fruits = [ "apple","strawberry", "banana", "orange","mango"];
function checkString(fruits) {
    return fruits.every(el => typeof el === "string");
}


function checkStartsWithA(fruits) {
    return fruits.some(el => el.startsWith("a"));
}


function newArray(fruits) {
    return fruits.filter(el => el.startsWith("b") || el.startsWith("s"));
}


function likeFruits(fruits) {
    return fruits.map(el =>`I like ${el}`);
}


const likeFruitsArr = likeFruits(fruits);
likeFruitsArr.forEach(el => console.log(el));