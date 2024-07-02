// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

function correctFn(sentence, wrong, correct) {
  let correctedSentence = sentence.replace(new RegExp(wrong), correct);
  return correctedSentence;
}

let sentence = "I love Moves and playing Criket.";
let correctedSentence = correctFn(sentence, "Moves", "Movies");
correctedSentence = correctFn(correctedSentence, "Criket", "Cricket");

console.log(correctedSentence);
