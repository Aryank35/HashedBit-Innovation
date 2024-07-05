// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH

function reverseString(input) {
    return input.split('').reverse().join('');
  }
  
  const input = "Hello";
  console.log(reverseString(input));
  