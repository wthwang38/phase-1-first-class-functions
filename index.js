
 function runFiveMiles() {
    console.log("Go for a five-mile run");
  }
  function liftWeights() {
    console.log("Pump iron");
  }
  function swimFortyLaps() {
    console.log("Swim 40 laps");
  }

  function receivesAFunction(secondExercise) {
    secondExercise();
}

function returnsANamedFunction(){
    return liftWeights;
}

function returnsAnAnonymousFunction() {
    return function(){
    }
}