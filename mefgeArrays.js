function merge(array1, array2) {
  // Concatenate the arrays and use the sort method to sort the result
  return array1.concat(array2).sort((a, b) => a - b);
}

// Test cases
console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);
