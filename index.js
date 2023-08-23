const logoGenerator = require('./lib/logoGenerator');
const fs = require('fs');
const path = require('path');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function main() {
    console.log('Starting logo generation...');
    // Get user input using logoGenerator.getUserInput()
    const userInput = await logoGenerator.getUserInput();
    console.log('User input:', userInput); // Print user input

    // Generate SVG code based on user input
    let svgCode = '';

    if (userInput.shape === 'circle') {
        console.log('Generating circle SVG code...');
        const circle = new Circle(100, userInput.color);
        svgCode = circle.render();
    } else if (userInput.shape === 'triangle') {
        console.log('Generating triangle SVG code...');
        const triangle = new Triangle(488, 182, userInput.color);
        svgCode = triangle.render();
    } else if (userInput.shape === 'square') {
        console.log('Generating square SVG code...'); 
        const square = new Square(200, userInput.color);
        svgCode = square.render();
    }

    // Specify the path to the "examples" folder
    const examplesFolderPath = path.join(__dirname, 'examples');

    // Ensure the "examples" folder exists
    if (!fs.existsSync(examplesFolderPath)) {
        fs.mkdirSync(examplesFolderPath);
    }

    // Write the generated SVG code to an SVG file in the "examples" folder
    const svgFilePath = path.join(examplesFolderPath, 'generated-logo.svg');
    fs.writeFileSync(svgFilePath, svgCode);

    console.log(`SVG file generated and saved as "${svgFilePath}"`);
}

main();