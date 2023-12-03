//imports

import formatStringByWordsLength from "./formatStringByWordsLength.js";

const case1 = "This is the very long sentence";
const result1 = formatStringByWordsLength(case1);
console.log(result1);

const case2 = "This is short one";
const result2 = formatStringByWordsLength(case2);
console.log(result2);
