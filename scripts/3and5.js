//Project Euler - Multiples of 3 and 5

//Problem 1:
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.

function multiplesOfThreeAndFive() {

	var total = 0;

	for (var counter = 1; counter < 1001; counter++) {
		if ((counter % 3 === 0) || (counter % 5 === 0)) {
	      total += counter;
		}
	}

	document.getElementById("answer").innerHTML = "The answer is " + total;
};