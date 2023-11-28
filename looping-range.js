function range(start, end, step) {
  // Check for incorrect parameters
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return [];
  }

  const result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }

  return result;
}

// Test cases
console.log(range(0, 10, 2)); // should print [ 0, 2, 4, 6, 8, 10 ]
console.log(range(10, 30, 5)); // should print [ 10, 15, 20, 25, 30 ]
console.log(range(-5, 2, 3)); // should print [ -5, -2, 1 ]
console.log(range()); // should print [] (undefined parameters)
console.log(range(5, 2, 1)); // should print [] (start greater than end)
console.log(range(0, 10, 0)); // should print [] (step is 0)
