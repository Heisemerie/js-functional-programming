//Immutability is important in Functional programming and ties into Pure functions
//Immutability means "cannot be changed", it is consistent and safe. Like pure functions it is predictable and testable

//"const" prevents variables from being reassigned by accident
const salutation = "hello";

//"const" does not make an object immutable, it only prevents it from being reassigned
const person = { firstName: "John" };
person.lastName = "Doe"; //properties can be changed or added

//Object.freeze() makes an objects and arrays immutable
const person2 = Object.freeze({ name: "Tems" });
const scores = Object.freeze([4, 6, 8, 7, 5]); //cannot use array.push()

//mutation is unpredictable and inconsistent. To add a value to the array avoid manipulative methods "push", create a new array, spread the previos array and add the new item
function addElement(arr, value) {
  // arr.push(value)
  return [...arr, value];
}
