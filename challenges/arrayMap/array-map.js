//Write a function called map which takes an array and a function as arguments. Without utilizing any of the built-in methods available to your language, return an array with the function applied to each element.
// can't use .map would have to use a for loop or something similar.
//for loop structure below 
///////////////////////////
// let str = "";
// for (let i = 0; i < 9; i++) {
//   str = str + i;
// }
// console.log(str);
// // expected output would be: "012345678"

// create a function called map that takes in array and function as arguments.
function map(arr, func) {
    //set a variable to an empty array
    let newArray = [];
    // loop through the arr we took in above using .length
    for(let i = 0; i < arr.length; i++) {
        // for the newArray we set the value, for that specific index, equal to the func, which is equal to the...give it
    
        newArray[i] = func(arr[i]);
    }
    // return said new array
    return newArray;
};
