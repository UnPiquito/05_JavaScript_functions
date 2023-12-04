/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */

/**
 *
 * @param {number} limit
 * @returns number
 */

const generateRandomNumberInRange = function (limit) {
  const randomNumber = Math.floor(Math.random() * limit);

  return randomNumber;
};

export default generateRandomNumberInRange;
