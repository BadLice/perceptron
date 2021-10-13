let perceptron;
let points;
function setup() {
	createCanvas(300, 300);
	perceptron = new Perceptron();
	points = Array.from({ length: 100 }, () => new Point());
	//push limit case 0,0 to test bios (top left corner point)
	points.push(new Point(0, 0));
}

function draw() {
	background(255);
	stroke(0);
	line(0, height, width, 0);
	points.forEach((p) => {
		p.show();
		noStroke();
		//display green point if guess of perceptron is right else red point
		if (perceptron.guess(p.coordinates) === p.target) {
			fill(0, 255, 0);
		} else {
			fill(255, 0, 0);
		}
		ellipse(p.getPixels().x, p.getPixels().y, 5);
	});

	//supervised training of perceptron
	points.forEach((p) => {
		perceptron.train(p.coordinates, p.target);
	});
}
