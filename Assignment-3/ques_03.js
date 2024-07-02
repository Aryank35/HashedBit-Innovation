// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice

let string = 'INDIA';
let arr = string.split(''); // Convert string to array of characters

// Insert 'O', 'N', 'E', 'S' after 'I' (index 3)
arr.splice(3, 0, 'O', 'N', 'E', 'S');

let result = arr.join(''); // Convert array back to string
console.log(result); // Output: 'INDONESIA'
