/* **********
 * Functions Statements and Expressions
 */

// function declaration
// function whatDoYouDo(job, firstName) {}

// function expression
var whatDoYouDo = function(job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches kids how to code.";
    case "driver":
      return firstName + " drives a cab in Lisbon.";
    case "designer":
      return firstName + " designs beautiful websites.";
    default:
      return firstName + " does something else.";
  }
};

console.log(whatDoYouDo('driver', 'Zain'));
console.log(whatDoYouDo('retired', 'Mark'));

// in js expression are those which produce values

// statements do not produce immediate values

