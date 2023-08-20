const logoGenerator = require('./lib/logoGenerator'); 

// using async await instead of .then, as taught by tutor
async function main() {
  // here i will call functions from logoGenerator and other modules to execute application functionality
  const userInput = await logoGenerator.getUserInput();

  // Perform SVG generation and other logic based on the user input
  // Call functions to generate the SVG logo with the provided input
  // generate SVG file... 
}

main();