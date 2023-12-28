/**
 * A simple math library for basic arithmetic operations.
 */

/**
 * Adds two numbers.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The sum of a and b.
 */
export function add(a: number, b: number): number {
	return a + b
}

/**
 * Subtracts the second number from the first.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The difference of a and b.
 */
export function subtract(a: number, b: number): number {
	return a - b
}

/**
 * Multiplies two numbers.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The product of a and b.
 */
export function multiply(a: number, b: number): number {
	return a * b
}

/**
 * Divides the first number by the second.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The quotient of a and b.
 */
export function divide(a: number, b: number): number {
	if (b === 0) {
		throw new Error('Cannot divide by zero.')
	}
	return a / b
}
