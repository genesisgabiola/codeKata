/**
 * Check if One Array can be Nested in Another
 *
 * Create a function that returns true if the first array can be nested inside the second.
 *
 * arr1 can be nested inside arr2 if:
 * 1. arr1's min is greater than arr2's min.
 * 2. arr1's max is less than arr2's max.
 *
 * Examples:
 * canNest([1, 2, 3, 4], [0, 6]) ➞ true
 * canNest([3, 1], [4, 0]) ➞ true
 * canNest([9, 9, 8], [8, 9]) ➞ false
 * canNest([1, 2, 3, 4], [2, 3]) ➞ false
 *
 * Note: Note the strict inequality (see example #3).
 */

// Use Math.max.apply(Math, arr) or Math.max(...arr)
// const canNest = (arr1, arr2) => Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2) ? true : false;

const canNest = (arr1, arr2) =>
  Math.min(...arr1) > Math.min(...arr2) &&
  Math.max(...arr1) < Math.max(...arr2);
