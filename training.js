const Point = function (x, y) {
	//coordinates in cartesian plane
	x = x ?? random(-1, 1);
	y = y ?? random(-1, 1);

	const target = y > xline.solve(x) ? 1 : -1; //1 if point is above the line, -1 instead

	const show = () => {
		stroke(0);
		target >= 0 ? fill(0) : fill(255);
		ellipse(getPixels().x, getPixels().y, 5);
	};

	//coordinates in canvas (used when drawing)
	const getPixels = () => {
		return { x: map(x, -1, 1, 0, width), y: map(y, -1, 1, height, 0) };
	};

	return { x, y, target, show, coordinates: [x, y], getPixels };
};

const Line = function () {
	const m = random(-1, 1);
	const b = random(-1, 1);

	const solve = (x) => {
		//y = mx + b
		return m * x + b;
	};

	const draw = () => {
		stroke(0);
		let p1 = new Point(-1, solve(-1));
		let p2 = new Point(1, solve(1));
		line(p1.getPixels().x, p1.getPixels().y, p2.getPixels().x, p2.getPixels().y);
	};

	return { solve, draw };
};
