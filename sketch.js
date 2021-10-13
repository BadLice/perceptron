let perceptron;
let points;
let pointIndex = 0;
let xline;

function setup() {
	createCanvas(300, 300);

	xline = new Line();

	perceptron = new Perceptron();

	points = Array.from({ length: 500 }, () => new Point());
	//push limit case 0,0 to test bias (top left corner point)
	points.push(new Point(0, 0));
}

function draw() {
	background(255);
	xline.draw();
	perceptron.drawGuessedLine();

	points.forEach((p) => {
		p.show();
		drawGuessResult(p);
	});

	trainPerceptron();
}

//display green point if guess of perceptron is right else red point
function drawGuessResult(p) {
	noStroke();
	if (perceptron.guess(p.coordinates) === p.target) {
		fill(0, 255, 0);
	} else {
		fill(255, 0, 0);
	}
	ellipse(p.getPixels().x, p.getPixels().y, 5);
}

//supervised training of perceptron
function trainPerceptron() {
	//one point per frame
	pointIndex = (pointIndex + 1) % (points.length - 1);
	let p = points[pointIndex];
	perceptron.train(p.coordinates, p.target);
}
