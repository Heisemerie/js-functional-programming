//JS functions are first class objects (can be stored in a variable, passed and returned from other functions)
//"Function" is a data type (this allows them to create function objects and use them like other objects in JS)
function add(x, y) {
  return x + y; //function declaration
}

//you can assign a function to a variable (because they are first class objects)
const add2 = function (x, y) {
  return x + y; //function expression
};
add(1, 3);

//functions can be passed as arguments to other functions (because they are first class objects)
document.addEventListener("click", function (e) {
  //...
});

//functions can be returned from other functions (because they are first class objects)
function greet(salutation, firstName) {
  return `${salutation} ${firstName}`; //assuming there are two parts to a greeting (salutation and name)
}
//but what if you wanted to create something more specialized;
const greet2 = function (salutation) {
  return function (firstName) {
    return `${salutation} ${firstName}`; //"greet()" accepts the "salutation" and the inner (anonymous) function accepts the "name" and is returned
  };
};
//this technique allows you to create unique greeting functions from "greet()";
const howdy = greet2("Howdy"); //create a howdy greet function
const hello = greet2("Hello"); //create a hello greet function
console.log(howdy("Bob")); //set the name later
console.log(hello("John"));
//this allows for code reusability, instead of creating a "greet" class
//start thinking of functions as objects (it is somethig we can execute, but importantly it is something we can store in a variable, pass and return from other functions)
//this is the core of functional programming
