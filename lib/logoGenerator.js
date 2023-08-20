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
  ]);

  const enteredText = userInput.text;
  console.log('Entered text:', enteredText);
}

getUserInput();