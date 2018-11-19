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
