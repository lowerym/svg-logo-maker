// Import Triangle, Square, and Circle classes from shapes.js
const { Triangle, Square, Circle } = require("./shapes.js");

// Testing for a Triangle with a Blue Background to Render
describe("Triangle Test", () => {
  test("Test for a Triangle with a Blue Background", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

// Testing for a Square with a Red Background to Render
describe("Square Test", () => {
  test("Test for a Square with a Red Background", () => {
    const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="250" height="250" fill="red" />'
    );
  });
});

// Testing for a Circle with a Yellow Background to Render
describe("Circle Test", () => {
  test("Test for a Circle with a Yellow Background", () => {
    const shape = new Circle();
    shape.setColor("yellow");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="yellow" />'
    );
  });
});
