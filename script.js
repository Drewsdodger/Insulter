function generateRandomNumber() {
  return Math.floor(Math.random() * 25) + 1;
}

window.onload = function() {
  var randomNumber = generateRandomNumber();
  var exampleText;

  switch (randomNumber) {
    case 1:
      exampleText = "You smell like a monkeys arse";
      break;
    case 2:
      exampleText = "you're a dickhead";
      break;
    case 3:
      exampleText = "You look like your name would be Merryn";
      break;
    
    case 4:
      exampleText = "You look like a bisexual squirell";
      break;
case 5:
      exampleText = "You smell like a whorehouses outhouse";
      break;
case 6:
      exampleText = "The only way someone would miss you is with bullets";
      break;
case 7:
      exampleText = "You're a snot eating bastard";
      break;
case 8:
      exampleText = "You have a face for radio, and a voice for letters";
      break;
case 9:
      exampleText = "You're face makes onions cry";
      break;
case 10:
      exampleText = "you have a 2 centimeter defeater";
      break;
case 11:
      exampleText = "I overestimated you, somehow";
      break;
case 12:
      exampleText = "You've been an idiot your whole life, why not take a day off?";
      break;
case 13:
      exampleText = "I'm suprised you could type the URL to this site";
      break;
case 14:
      exampleText = "You've got the brains of a pet rock";
      break;
case 15:
      exampleText = "You're cameras enabled you know, theres food on your 3rd chin";
      break;
case 16:
      exampleText = "if I lost a penny for each time you said something stupid, I'd be bankrupt";
      break;
case 17:
exampleText = "I've seen lemons whiter than your teeth";
      break;
    case 18:
exampleText = "You look like a before picture";
      break;
case 19:
      exampleText = "You're face is more oily than a McDonalds deep fryer";
      break;
case 20:
      exampleText = "you look like your family tree loops around";
      break;
case 21:
      exampleText = "You'd fail a personality test";
      break;
case 22: 
      exampleText = "You probably have shit stains on all your pants";
      break;
case 23:
      exampleText = "Cunthead";
      break;
case 24:
exampleText = "You have dung breath";
      break;
    case 25:
      exampleText = "You look like a monkey, you act like a money . . . are you a monkey?";
      break;
    default:
      exampleText = "No example";
  }

  var exampleElement = document.querySelector('.example-text');
  exampleElement.innerHTML = exampleText;
};