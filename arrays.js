"use strict";


// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(`${items[i]} ${i}`);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];
  for (const item in items) {
    if (item % 2 == 0) {
      result.push(items[item]);
    }
  }
  console.log(result);
}


// 3. smallestNItems
function smallestNItems(items, n) {
  const sortedNums = items.sort((a, b) => a - b);
  console.log(sortedNums.slice(0,n).reverse())
}
