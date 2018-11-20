  const scenario = {
     murderer: 'Mrs. Peacock',
     room: 'Conservatory',
     weapon: 'Lead Pipe'
   };

   const changeScenario = function() {
     scenario.murderer = 'Mrs. Peacock';
     scenario.room = 'Dining Room';

     const plotTwist = function(room) {
       if (scenario.room === room) {
         scenario.murderer = 'Colonel Mustard';
       }

       const unexpectedOutcome = function(murderer) {
         if (scenario.murderer === murderer) {
           scenario.weapon = 'Candle Stick';
         }
       }

       unexpectedOutcome('Colonel Mustard');
     }

     plotTwist('Dining Room');
   }

   const declareWeapon = function() {
     return `The weapon is ${scenario.weapon}.`
   }

   changeScenario();
   const verdict = declareWeapon();
   console.log(verdict);

 //
 //  Prediction
   // The weapon is the lead pipe which was never changed, because the murderer was chnged to Col Mstd after Col Must was given as an input so they didn't match in plotTwist
 //
 //
 //  Actual output
  //Candlestick
 //
 // Reason for output
   //Unexpected outcome must have run after PlotTwist
   // Functions within functions run in vertical order from top to bottom, regardless of the order their variables are given in

   // plotTwist and unexpectedFunction are only declared when they first appeared, they are then run in the vertical order they are called in
