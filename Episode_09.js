// #### Episode 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);


//
//  Prediction
  // The murderer is Professor Plum
    // murderer as Mrs Peacock is a let, so the murderer is never changed outwith that scope
//
//  Actual output
  //The murderer is Professor Plum.
//
// Reason for output
  //See Above

// if (murderer === 'Professor Plum') {
//   murderer = 'Mrs. Peacock';
// }
// If murderer inside if statement had no let, it would change the murderer to Mrs Peacock outside the if statement
