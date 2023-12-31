/**
 * #7 :: Exprot JS function "isTypeOf" to check if type of value matches type received as argument
 * hint :: array should be treated in a different way. Use Array.isArray() to check it
 * doc :: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 * input: 'string' | 'number' | 'boolean' | 'array' (value)
 * input: boolean (type)
 * output:
 */

const isTypeOf = function (value, type) {
  if (type === "array") {
    return Array.isArray(value);
  }

  if (type === "string") {
    return typeof value === "string";
  }

  if (type === "number") {
    return typeof value === "number";
  }

  if (type === "boolean") {
    return typeof value === "boolean";
  }

  return false;
};

export default isTypeOf;
