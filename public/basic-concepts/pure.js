//There are two types of functions in functional programming; Pure and Impure functions

//Pure functions are easy to test and predict (always return the same result with the same input)
//it is solely dependent on its inputs (parameters)
function sum(a, b) {
  return a + b;
}
sum(1, 2); //returns 3
sum(1, 2); //returns 3

//Impure functions rely on external data (the console is external; it was not passed to the function)
//it has a side-effect
function sum2(a, b) {
  console.log(a + b); //external and produces an observable side-effect
  return a + b;
}
//side-effects; http requests, reading/writing to local storage, querying or manipulating the DOM etc...

//We want to write Pure functions in our programs. But to do meaningful things we write impure functions
