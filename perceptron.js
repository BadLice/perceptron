//it classifies if a point is over or under the line which starts at top left corner and end at bottom right corner
//2 inputs + 1 bias -> 3 weights
const Perceptron = function () {
	//initialize weights randomly
	let weights = Array.from({ length: 3 }, () => random(-1, 1));

	// multiplier to reduce the weight adjustment in order to not overwhelm the target
	let learningRate = 0.1;

	// 1 if over the line, -1 if under the line
	const guess = (inputs) => {
		inputs = addBias(inputs);

		//1 -> weighted sum of inputs
		const sum = weights.reduce((acc, weight, index) => acc + inputs[index] * weight, 0);

		//2 -> activation function (in this case we use sign function)
		const output = sign(sum);

		return output;
	};

	//supervised training
	const train = (inputs, target) => {
		inputs = addBias(inputs);

		//take a guess
		let g = guess(inputs);

		//error is the difference between the guessed result and the actual right result
		error = target - g;

		//gradient descent
		weights = weights.map((weight, index) => weight + error * inputs[index] * learningRate);
	};

	//add a third input (called bias) which always is 1 to manage limit case P(0,0)
	const addBias = (inputs) => [...inputs, 1];

	//this is the activation function
	const sign = (n) => (n >= 0 ? 1 : -1);

	const guessLineY = (x) => {
		// w0/w1 -> wheigts
		// wb -> weight of bias
		// b = 1 -> bias

		// w0*x + w1*y + wb*b=0
		// y = (-wb*b - w0*x)/w1
		// y = (-wb*b/w1) + (-w0*x/w1) -> y = (-w0/w1)*x + (-wb/w1)*b
		// m = (-w0/w1) - b = (-wb/w1)

		const m = -weights[0] / weights[1];
		const b = -weights[2] / weights[1];
		return m * x + b;
	};

	return { guess, train, guessLineY };
};
