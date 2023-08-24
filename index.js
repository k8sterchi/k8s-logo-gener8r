const logoGenerator = require('./lib/logoGenerator');
const fs = require('fs');
const path = require('path');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function main() {
    // Get user input using logoGenerator.getUserInput()
    const userInput = await logoGenerator.getUserInput();

    // Generate SVG code based on user input
    let svgCode = '';
console.log(userInput);
    if (userInput.shape === 'circle') {
        const circle = new Circle(100, userInput.backgroundColor);
        svgCode = circle.render();
    } else if (userInput.shape === 'triangle') {
        const triangle = new Triangle(488, 182, userInput.backgroundColor);
        svgCode = triangle.render();
    } else if (userInput.shape === 'square') {
        const square = new Square(200, userInput.backgroundColor);
        svgCode = square.render();
    }

const svgText = `<text x="60" y="110" font-size="50px" fill=${userInput.textColor}> ${userInput.text}</text>`
    // Specify the path to the "examples" folder
    const examplesFolderPath = path.join(__dirname, 'examples');

    // Ensure the "examples" folder exists
    if (!fs.existsSync(examplesFolderPath)) {
        fs.mkdirSync(examplesFolderPath);
    }
console.log(svgCode, 'this should be the code')
    // SVG wrapper with specified width and height
    const svgWrapper = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${svgCode}${svgText}</svg>`;

    // Write the generated SVG code to an SVG file in the "examples" folder
    const svgFilePath = path.join(examplesFolderPath, 'logo.svg');
    fs.writeFileSync(svgFilePath, svgWrapper);

    console.log(`SVG file generated and saved as "${svgFilePath}"`);
    
}

main();