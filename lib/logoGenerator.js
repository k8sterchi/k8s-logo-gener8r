const inquirer = require('inquirer');

async function getUserInput() {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: function (input) {
        // Validate that the input has up to three characters
        return input.length <= 3 || 'Please enter up to three characters.';
      },
    },
    {
        type: 'input',
        name: 'color',
        message: 'Enter a color keyword or a hexadecimal number for the text color:',
        validate: function (input) {
          // Validate input as either a valid color keyword or a valid hexadecimal number
          return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^(red|blue|green|yellow|...)$/i.test(input) || 'Invalid color input.';
        },
      },
      {
        type: 'list', 
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'], 
      },
    ]);
    console.log('User input:', userInput); // Print user input

    const enteredText = userInput.text;
    const textColor = userInput.color;

    console.log('Entered text:', enteredText); // Print entered text
    console.log('Text color:', textColor); // Print text color
  
    
    return { text: enteredText, color: textColor };
  }
  
  module.exports = {
    getUserInput,
  };