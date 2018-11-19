// #### Episode 7


let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);


//  Prediction
  //murderer is Mr Green
  //The murderer starts out as Prof Plum(let - which can be changed), but is then changed to Mr Green within the changeMurderer function. The murderer is then changed to a let variable Colonel Mustard by the plotTwist function, which is then changed to Miss Scarlet, and Miss Scarlet as the murderer is captured at unexpected outcome. However, plotTwist falls outside the let scope that contains both Colonel Mustard and Miss Scarlet, so the murderr defaults back to Mr Green at plotTwist.

//  Actual output
  // The murderer is Mr. Green.
  //
// Reason for output
   // See above
