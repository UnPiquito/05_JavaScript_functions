/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 */

/**
 *
 * @param {array} collection
 * @returns boolean
 */

const checkCollectionHasElements = function (collection) {
  let hasElements = false;

  if (collection.length > 0) {
    return (hasElements = true);
  }

  return hasElements;
};

export default checkCollectionHasElements;
