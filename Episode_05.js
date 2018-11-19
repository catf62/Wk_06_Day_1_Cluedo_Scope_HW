// #### Episode 5


const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

//  Prediction
  //The weapon will be the revolved because although scenario is a constant, the variables within scenario, including weapon, are changable using the changeWeapon function which was called first
  //

//  Actual output
  //The weapon is the Revolver.
  //
// Reason for output
   //See above
