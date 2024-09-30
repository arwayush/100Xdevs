function sum(num1, num2, fnToPass) {
  let result = num1 + num2;
  return fnToPass(result);
}

function displayResult(data) {
  console.log("Result of the sum is:" + data);
  return data;
}

function displayResultPassive(data) {
  console.log("Sum of the result is:" + data);
}

const val = sum(1, 4, displayResult);
console.log(val);
