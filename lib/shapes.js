// Shape class uses constructor to define what a shape is
class Shape {
  constructor() {
    this.color = "";
  }
  // Shape class takes setColor function
  setColor(colorVar) {
    this.color = colorVar;
  }
}

// Triangle class inherits properties from Shape class
class Triangle extends Shape {
  render() {
    // Returns polygon with color input
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// Square class inherits properties from Shape class
class Square extends Shape {
  render() {
    // Returns polygon with color input
    return `<rect x="73" y="40" width="250" height="250" fill="${this.color}" />`;
  }
}

// Circle class inherits properties from Shape class
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
  }
}

// Exports Triangle, Square, and Circle classes
module.exports = { Triangle, Square, Circle };
