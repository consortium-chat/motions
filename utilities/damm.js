/**
 * @file Damm algorithm
 * @author Benjamin Herman <benjamin@metanomial.com>
 * @version 1.0.0
 * @see {@link https://en.wikipedia.org/wiki/Damm_algorithm|Damm algorithm}
 */

/**
 * Damm conversion table
 * @type {number[][]}
 */
const table = [
	[0, 3, 1, 7, 5, 9, 8, 6, 4, 2],
	[7, 0, 9, 2, 1, 5, 4, 8, 6, 3],
	[4, 2, 0, 6, 8, 7, 1, 3, 5, 9],
	[1, 7, 5, 0, 9, 8, 3, 4, 2, 6],
	[6, 1, 2, 3, 0, 4, 5, 9, 7, 8],
	[3, 6, 7, 4, 2, 0, 9, 5, 8, 1],
	[5, 8, 6, 9, 7, 2, 0, 1, 3, 4],
	[8, 9, 4, 5, 3, 6, 2, 0, 1, 7],
	[9, 4, 3, 8, 6, 1, 7, 2, 0, 5],
	[2, 5, 8, 1, 4, 3, 6, 7, 9, 0]
];

/**
 * Generate Damm check digit
 * @param {string} input
 * @return {string} Damm check digit
 */
function generate(input) {
	let digit = 0;
	for(let i = 0; i < input.length; ++i) {
		const column = input.charAt(i);
		digit = table[digit][column];
	}
	return digit.toString();
}

/**
 * Check number string input
 * @param {string} input - Numeric string
 * @throws {TypeError} when input contains non-digit character
 */
function checkInput(input) {
	if(input.match(/\D/))
		throw new TypeError('Input must contain only digits');
}

/**
 * Create a Damm sequence
 * @param {string} input - Numeric string
 * @throws {TypeError} when input contains non-digit character
 * @return {string} Damm sequence
 */
export function sequence(input) {
	checkInput(input);
	return input + generate(input);
}

/**
 * Verify Damm sequnce
 * @param {string} input - Numeric string
 * @throws {TypeError} when input contains non-digit character
 * @return {boolean}
 */
export function verify(input) {
	checkInput(input);
	return generate(input) == '0';
}
