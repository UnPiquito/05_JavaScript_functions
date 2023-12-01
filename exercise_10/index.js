//imports

import transformCollectionToString from "./transformCollectionToString.js";

const case1 = ['car', 'apple', 'book', 'pencil'];
const result1 = transformCollectionToString(case1);
console.log(result1);

const case2 = [];
const result2 = transformCollectionToString(case2);
console.log(result2);