// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume(param1, param2, callback) {
  return callback(param1, param2)
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
const add = function (param1, param2) {
  return param1 + param2
}

const multiply = function (param1, param2) {
  return param1 * param2
}

const greeting = function (param1, param2) {
  return `Hello ${param1} ${param2},nice to meet you`
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

The Nested function can access the variable 'internal' since it exists in the myFunction() 
which means internal belongs to myFunction(). The compiler goes through the code twice. Initially the
compiler looks for the references. It comes to myFunction() first and sees where external came from.
It sees external is a global variable and assigns it. Then it sees internal already has a value 
in myFunction(). Then the compiler comes to nestedFunction(), it sees the internal variable and asks
 nestedfunction if it has any information about internal. The nestedFunction() says the compiler that it 
 does not reference to it and asks the myFunction() above it. The myFunction says that it has internal
 and says to the nestedFunction that it can use whenever it wants. This is called as closure. So basically 
 the variable internal came from its lexical scopr or where it belongs to, in this case internal
 lexical scope is myFunction().