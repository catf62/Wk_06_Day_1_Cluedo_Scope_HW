// #### Episode 1

// ```js
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
// ```

//  Prediction
  // No error, or error because scenario and declareMurderer are only available inside themselves?

//  Actual output
  // The murderer is Miss Scarlet.
   // Original prediction was correct, there are no scope issues with this episode
