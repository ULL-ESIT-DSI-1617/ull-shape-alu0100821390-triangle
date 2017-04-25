let Triangle = require('../lib/triangle');

describe ("getArea Triangle", function() {
	it ("must compute the triangle area correctly", function() {
		let t = new Triangle({ width: 100, height: 100 });
		let result = t.getArea();
		result.should.equal(5000);
	})
});
