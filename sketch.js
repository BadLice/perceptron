let perceptron;
let points;
let pointIndex = 0;

function setup() {
	createCanvas(300, 300);
	perceptron = new Perceptron();
	points = Array.from({ length: 100 }, () => new Point());
	//push limit case 0,0 to test bias (top left corner point)
	points.push(new Point(0, 0));
}

function draw() {
	background(255);
	drawActualLine();
	drawGuessedLine();

	points.forEach((p) => {
		p.show();
		drawGuessResult(p);
	});

	trainPerceptron();
}

//draw real line
function drawActualLine() {
	stroke(0);
	let p1 = new Point(-1, solveLine(-1));
	let p2 = new Point(1, solveLine(1));
	line(p1.getPixels().x, p1.getPixels().y, p2.getPixels().x, p2.getPixels().y);
}

// draw where the perceptron think the line is
function drawGuessedLine() {
	stroke(100);
	// line(0, height, width, 0);

	let p1 = new Point(-1, perceptron.guessLineY(-1));
	let p2 = new Point(1, perceptron.guessLineY(1));
	line(p1.getPixels().x, p1.getPixels().y, p2.getPixels().x, p2.getPixels().y);
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
