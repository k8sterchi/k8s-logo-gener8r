# k8s-logo-gener8r
## Description
a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file
## Table of Contents
- [Installation](#installation)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Preview](#preview)
- [Demo](#demo)
- [Resources](#resources)
- [License](#license)
## Installation
1. Make sure Node.js is installed on your system. 

2. Download or clone the code from my Github repository.

3. Navigate to the project directory and install dependencies `npm install`

4. After dependencies are installed, you can run the application from the terminal using the following command: `node index.js`

5. Answer the questions prompted by the application. 

6. Once you have completed the prompts, the application will generate a .svg file containing your logo. You can find the file within the 'examples' directory. 

## User Story
>AS a freelance web developer

I WANT to generate a simple logo for my projects

SO THAT I don't have to pay a graphic designer.>

## Acceptance Criteria
>GIVEN a command-line application that accepts user input

WHEN I am prompted for text

THEN I can enter up to three characters

WHEN I am prompted for the text color

THEN I can enter a color keyword (OR a hexadecimal number)

WHEN I am prompted for a shape

THEN I am presented with a list of shapes to choose from: circle, triangle, and square

WHEN I am prompted for the shape's color

THEN I can enter a color keyword (OR a hexadecimal number)

WHEN I have entered input for all the prompts

THEN an SVG file is created named `logo.svg`

AND the output text "Generated logo.svg" is printed in the command line

WHEN I open the `logo.svg` file in a browser

THEN I am shown a 300x200 pixel image that matches the criteria I entered
>
## Preview
## Demo
## Resources
I pair programmed with my friend Dirt to figure out why my .svg file was being generated without any code based off the user inputs.

MDN and ChatGPT continue to be helpful resources. 

[For the license badge, I copied from this repo.](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba) But i changed the color to bright-green because it is my favorite color.
## License
This application is covered under the 
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

[MIT License](./LICENSE) license.



