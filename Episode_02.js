// #### Episode 2


const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//  Prediction
  // Not sure, either
    // 1. murderer is a global variable (it has no var, const or let), in which case it will be available to declare Murderer and there will be no error
    // 2. Or murderer is only available within changeMurderer, in which case declareMurderer will not be able to insert "Mrs. Peacock" into the string

//  Actual output
  //  TypeError: Assignment to constant variable
  // murderer = 'Mrs. Peacock'
// Reason for output
   // murderer Professor Plum at the top is a constant variable, so murderer cannot be reassigned...reading the top line might have helped!
   
   // variables with no markers look for existing variables with the same name, so murderer inside changeMurderer tries and fails to change const murderer, as opposed to creating a new global variable called murderer.
