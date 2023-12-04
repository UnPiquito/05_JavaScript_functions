/**
 * #5 :: Export JS function "isAdditionGreaterThanFifty" to check a pair of numbers and return true if their sum is 50 or greater than 50
 * input: number (summand1)
 * input: number (summand2)
 * output: boolean
 */

/**
 *
 * @param {number} summand1
 * @param {number} summand2
 * @returns boolean
 */

const isAdditionGreaterThanFifty = function (summand1, summand2) {
  let biggerThanFifty = false;

  if (summand1 + summand2 >= 50) {
    biggerThanFifty = true;
  }

  return biggerThanFifty;
};

export default isAdditionGreaterThanFifty;
