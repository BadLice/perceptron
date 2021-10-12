//it classifies if a point is over or under the line which starts at top left corner and end at bottom right corner
//2 inputs + 1 bios -> 3 weights
const Perceptron = function () {
	//initialize weights randomly
	let weights = Array.from({ length: 3 }, () => random(-1, 1));

	// multiplier to reduce the weight adjustment in order to not overwhelm the target
	let learningRate = 0.1;

	// 1 if over the line, -1 if under the line
	const guess = (inputs) => {
		inputs = addBios(inputs);

		//1 -> weighted sum of inputs
		const sum = weights.reduce((acc, weight, index) => acc + inputs[index] * weight, 0);

		//2 -> activation function (in this case we use sign function)
		const output = sign(sum);

		return output;
	};

	//supervised training
	const train = (inputs, target) => {
		inputs = addBios(inputs);

		//take a guess
		let g = guess(inputs);

		//error is the difference between the guessed result and the actual right result
		error = target - g;

		//gradient descent
		weights = weights.map((weight, index) => weight + error * inputs[index] * learningRate);
	};

	//add a third input (called bios) which always is 1 to manage limit case P(0,0)
	const addBios = (inputs) => [...inputs, 1];

	//this is the activation function
	const sign = (n) => (n >= 0 ? 1 : -1);

	return { guess, train };
};
