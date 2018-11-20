// #### Episode 6


let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//  Prediction
  //The murderer is Mrs White
  //The murderer starts off as Colonel Mustartd, but this is changed to Mrs White (via Mr Green..isn't he usually the victim!?) by calling changeMurderer.

//  Actual output
  //The murderer is Mrs. White.
  //
// Reason for output
   //See above

   // murderer declared within functions with no pre-word, always look for an exisiting variable with the same name
   // if there are no curly brackets starting on the first line, a let on the first line invents its own invisible curly brackets taking in the whole file, this means that variables declared with a let, will only be available within this file and not from outside
