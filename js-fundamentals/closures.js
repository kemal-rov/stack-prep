// What are closures in JavaScript?

/*
A closure is a function that remembers 
its outer scope even after the 
outer function has finished executing.
*/

function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
  }
  
  const counter = createCounter();
  
  console.log(counter()); // 1
  console.log(counter()); // 2