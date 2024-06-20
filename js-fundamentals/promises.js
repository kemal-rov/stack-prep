// Describe promises in JavaScript.

/*
Promises handle asynchronous operations and can be 
in pending, fulfilled, or rejected states.
*/

// Sooo, let's first write the delay function
function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Success!");
      }, ms);
    });
  }
  
  // Now we can use it in asynchronous context
  async function example() {
    try {
      const message = await delay(1000);
      console.log(message); // "Success!" after 1 second
    } catch (error) {
      console.log(error);
    }
  }
  
  // run the async function
  example();
  