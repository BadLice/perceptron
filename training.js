const Point = function (x, y) {
	//coordinates in cartesian plane
	x = x ?? random(-1, 1);
	y = y ?? random(-1, 1);
	const target = x > y ? 1 : -1;

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
