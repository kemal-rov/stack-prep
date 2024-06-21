/*
Explain the concept of enums 
in TypeScript with an example.
*/

// Enumerations are a feature in TypeScript that allow you 
// to define a set of named constants. 
// They make it easier to work with sets of related values, 
// such as days of the week, colors, or states.

enum Color {
    Red,
    Green,
    Blue
  }
  
  function getColorName(color: Color): string {
    switch (color) {
      case Color.Red:
        return "Red";
      case Color.Green:
        return "Green";
      case Color.Blue:
        return "Blue";
      default:
        return "Unknown color";
    }
  }
  
  // Example usages
  const myColor: Color = Color.Green;
  console.log(getColorName(myColor)); // "Green"
  console.log(Color.Red); // 0 (default enum values are 0-based)
  console.log(Color[1]); // "Green" (reverse mapping)
  