function foo(a, b) {
  if (b === 0) {
    return a; // Handle the case where b is 0
  } else if (a === b) {
    return true; 
  } else if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(10, 6)); // Output: true
console.log(foo(10, 0)); // Output: 10