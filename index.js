// Inquirer (Node Package Manager) Import
const inquirer = require("inquirer");

// File System Module (Node Package Manager) Import
const fs = require("fs");

// Import Classes from ./lib/shapes Directory
const { Triangle, Square, Circle } = require("./lib/shapes");

// Function that writes an SVG file based on user input from inquirer prompts
function writeToFile(fileName, answers) {
  let svgString = "";
  svgString =
  '<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">'
  svgString += "<g>";
  svgString += `${answers.shape}`;

  // Depending on which shape the user selects, this adds polygon properties and shape color to SVG string
  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}" />`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="250" height="250" fill="${answers.shapeBackgroundColor}" />`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}" />`
  }

  // <text> tag adds text alignment, text-content/text-color taken from user input and adds default font size of "24"
  svgString += `<text x="150" y="130" text-anchor="middle" font-size="24" fill="${answers.textColor}">${answers.text}</text>`
  // Closing </g> tag
  svgString += "</g>";
  // Closing </svg> tag
  svgString += "</svg>";

  // Uses file system module to generate SVG file, takes file name given in promptUser function, SVG string, and ternary operator which handles logging errors, or a "Generated logo.svg" message to console
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}
