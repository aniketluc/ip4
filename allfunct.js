// Function as object
let add = function(x, y) {
    return x + y;
  };
  console.log(add(2, 3)); // Output: 5
  
  // Arrow function
  let multiply = (x, y) => x * y;
  console.log(multiply(2, 3)); // Output: 6
  
  // Inner function
  function outer() {
    let inner = function() {
      console.log("Hello from inner function!");
    };
    inner();
  }
  outer(); // Output: Hello from inner function!
  
  // Anonymous function
  let numbers = [1, 2, 3, 4, 5];
  numbers.forEach(function(number) {
    console.log(number * 2);
  }); // Output: 2, 4, 6, 8, 10