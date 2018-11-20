// #### Episode 4


let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

//  Prediction
  //console.log(suspects); will spit out Miss Scarlet, Professor Plum and Colonel Mustard, because declareAllSuspects will change suspect suspectThree
  // console.log(`Suspect three is ${suspectThree}.`); will reutrn Mrs Peacock, because declareAllSuspects is not called again, and Colonel Mustard only exists inside declareAllSuspects and will have disappeared.

//  Actual output
  //The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
  // Suspect three is Mrs. Peacock.
// Reason for output
   //See above

   // functions always look within their own scope first
