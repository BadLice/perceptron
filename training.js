const Point = function (x, y) {
	x = x ?? random(width);
	y = y ?? random(height);
	const target = x > y ? 1 : -1;

	const show = () => {
		stroke(0);
		target >= 0 ? fill(0) : fill(255);
		ellipse(x, y, 5);
	};

	return { x, y, target, show, coordinates: [x, y] };
};
