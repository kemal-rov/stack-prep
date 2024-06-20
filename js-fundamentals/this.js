// Describe `this` in JavaScript.

/*
`this` refers to the context in which
the function is called.
*/

const obj = {
    name: "Kemal",
    greet: function() {
        console.log(this.name);
    }
};
  
obj.greet(); // "Kemal"
  