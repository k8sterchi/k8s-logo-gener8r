const { Triangle, Circle, Square } = require('./shapes');


describe('Triangle Class', () => {
    test('render() returns correct SVG string with shape color', () => {
      const triangle = new Triangle(244, 182);
      triangle.setColor("blue");
      const expectedSvg = '<polygon points="0,182 244,0 488,182" fill="blue" />';
      expect(triangle.render()).toEqual(expectedSvg);
    });
  
  });
  
  describe('Circle Class', () => {
    test('render() returns correct SVG string with shape color', () => {
      const circle = new Circle(100);
      circle.setColor("green");
      const expectedSvg = '<circle cx="100" cy="100" r="100" fill="green" />';
      expect(circle.render()).toEqual(expectedSvg);
    });
  
  });
  
  describe('Square Class', () => {
    test('render() returns correct SVG string with shape color', () => {
      const square = new Square(200);
      square.setColor("red");
      const expectedSvg = '<rect width="200" height="200" fill="red" />';
      expect(square.render()).toEqual(expectedSvg);
    });

  });

