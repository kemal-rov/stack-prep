/*
Write a generic function in 
TypeScript that merges two objects.
*/

function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }
  
  // Example usage
  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 3, c: 4 };
  
  const mergedObj = mergeObjects(obj1, obj2);
  console.log(mergedObj); // { a: 1, b: 3, c: 4 }
  