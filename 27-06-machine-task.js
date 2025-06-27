function division(num1, num2) {
  var result;
  try {
    if (num2 === 0) {
      throw new Error("Cannot divide by zero");
    }

    result = num1 / num2;
  } catch (error) {
    result = error.message;
  } finally {
    console.log("Operation Completed");
  }
  return result;
}

console.log(division(2, 6));
console.log(division(10, 0));
console.log(division(0, 20));
