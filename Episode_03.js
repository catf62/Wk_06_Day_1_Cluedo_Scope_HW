// #### Episode 3


let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
//  Prediction
  //firstVerdict will spit out Mrs Peacock
    // murderer is declared as a let variable which can be over written by the declareMurderer function
  //secondVerdict will spit out Prof Plum
    // secondVerdict does not call the declareMurderer function, since Mrs Peacock only exists within declareMurderer, she will disappear before secondVerdict is declared. murderer with therefore stay as Prof Plum

//  Actual output
  //First Verdict:  The murderer is Mrs. Peacock.
  // Second Verdict:  The murderer is Professor Plum.
// Reason for output
   // See above
