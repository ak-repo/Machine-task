// Create 3 nested functions: first(), second(), and third().

// Each function should log its own name when called.

// Call them in a nested fashion: first() calls second(), which calls third().

// Use comments to explain the creation and execution phases of the context for each function.

const first = function () {
  console.log("Starting first function, Call stack created");
  console.log("Calling Second function");
  second();
  console.log("Ending Second function");
  console.log("Ending first function, call satck cleared");

  function second() {
    console.log("Calling Third function");
    third();
    console.log("Ending Third function");

    function third() {
      console.log("Inside of Third function");
    }
  }
};

first();

// output
// Starting first function, Call stack created
// Calling Second function
// Calling Third function
// Inside of Third function
// Ending Third function
// Ending Second function
// Ending first function, call satck cleared
