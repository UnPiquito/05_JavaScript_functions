/**
 * #4 :: Export JS function "isGreaterThan" to check whether one number is greater than a given number
 * input: number (value)
 * input: number (threshold)
 * output: boolean
 */

/**
 *
 * @param {number} value
 * @param {number} threshold
 * @returns boolean
 */

const isGreaterThan = function (value, threshold) {
  let valueIsBigger = false;

  if (value > threshold) {
    valueIsBigger = true;
  }

  if (value < threshold) {
    valueIsBigger = false;
  }

  if (value === threshold) {
    console.log("try another numbers");
  }

  return valueIsBigger;
};

export default isGreaterThan;
