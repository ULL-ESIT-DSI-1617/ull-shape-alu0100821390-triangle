'use strict';

let Shape = require('@alu0100821390/ull-shape');

/**
* Clase que representa figuras con formas triangulares
* @class Triangle
* @param {hash} options Alto y Ancho
*/
class Triangle extends Shape {
	/**
	* Constructor de la clase Triangle
	* @construct Triangle
	* @param {hash} options Alto y Ancho
	*/
    constructor(options) {
      super(options)
    }
	/**
	* Función que calcula y devuelve el área de la figura
	* @function area
	* @return {number} Área de la figura
	*/
    area() {
      return 0.5 * this.width * this.height;
    }
}

Shape.Shapes.Triangle = Triangle;

module.exports = Triangle;
