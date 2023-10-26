function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆
  
  //Write your code here:
  var fibonacci = [];
  
  if (n === 1) {
    fibonacci = [0];
  } else if (n === 2) {
    fibonacci = [0, 1];
  } else {
    fibonacci = [0, 1];
    for (var i = 2; i < n; i++) {
      fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
    }
  }
  
  //Return an array of fibonacci numbers starting from 0.
  return fibonacci;
  
  //Do NOT change any of the code below 👇
}

console.log(fibonacciGenerator(5));