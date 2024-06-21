/*
Write a TypeScript function that 
takes an object with optional properties 
name (string) and age (number) and returns a string.
*/

function describePerson(person: { name?: string; age?: number }): string {
    let description = "Person details:";
    if (person.name) {
      description += ` Name: ${person.name}.`;
    }
    if (person.age !== undefined) {
      description += ` Age: ${person.age}.`;
    }
    return description;
  }
  
  // Example usages
  const person1 = { name: "John", age: 30 };
  const person2 = { name: "Jane" };
  const person3 = { age: 25 };
  
  console.log(describePerson(person1)); // "Person details: Name: John. Age: 30."
  console.log(describePerson(person2)); // "Person details: Name: Jane."
  console.log(describePerson(person3)); // "Person details: Age: 25."
  console.log(describePerson({})); // "Person details:"