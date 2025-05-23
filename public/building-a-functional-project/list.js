//There are two things to implement; handling the click event & generating content
//There is the Object-oriented and Functional approach of creating DOM objects
//Approaching the problem with object-oriented methods; we use the DOM API to create elements, wrapped in a wrapper API
//"Function composition" is the logical equivalent of "method chaining" and allows you to chain function calls
//There are two types of compositions; those that read from right to left using "compose()" and left to right using "pipe()"
//"compose()" and "pipe()" do not exist in JS, you have to write it yourself or use a third party; Ramda

//Objective:

//function to create HTML elements
const elem = (tag) => document.createElement(tag);
const text = (content) => document.createTextNode(content);

const addClass = R.curry(function (className, element) {
  element.classList.add(className);
  return element;
});

const append = R.curry(function (node, element) {
  element.appendChild(node);
  return element;
});

const setAttr = R.curry(function (attributeName, attributeValue, element) {
  element.setAttribute(attributeName, attributeValue);
  return element;
});

function message(content) {
  return R.compose(
    append(text(content)),
    setAttr("data-message", content),
    addClass("bg-light"),
    addClass("p-2")
  )(elem("div")); //"p-2" added before "bg-light", because it reads from right to left
}

document.body.appendChild(message("hello"));
