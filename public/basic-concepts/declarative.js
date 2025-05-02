//JS UI libraries like react use declarative programming
const numbers = [1, 2, 3, 4, 5, 6];
//in typical JS you would take an imperative approach (eg using for loops)
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
//with functional programming we rely on functions. In arrays we use the "forEach" function
numbers.forEach((item) => console.log(item));
//declarative programming helps understand a new codebase faster compared to imperative programming due to abstrction of details
//declarative programming is also easier to read 
//functional programming avoids loops(for, while, do...while; uses recursion for repetition), selection statements (if...else, switch...case; uses ternary instead for simple decisions)