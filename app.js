'use strict';

var question1Answer;
var question2Answer;
var question3Answer;
var question4Answer;
var question5Answer;
var questionArrayAnswers = [question1Answer, question2Answer, question3Answer, question4Answer, question5Answer];
var score = 0;
var invalids= 0;

question1Answer = prompt('Do I speak more than one language?').toLowerCase();
if (question1Answer === 'y' || question1Answer === 'yes') {
  console.log('Correct! I can speak Japanese as a high school exchange student and have traveled to Japan 5 times now.');
  score++;
} else if (question1Answer === 'n' || question1Answer === 'no') {
  console.log('Sorry, wrong. I speak Japanese. Not much use for it sadly besides my anime.');
} else {
  console.log('Yes or no please!');
  invalids++;
}

question2Answer = prompt('Do I know how to fly a biplane?').toLowerCase();
if (question2Answer === 'y' || question2Answer === 'yes') {
  console.log('Nope, that is incorrect. I wish.');
} else if (question2Answer === 'n' || question2Answer === 'no') {
  console.log('Hooray! Correct! Do not trust me to fly a plane!');
  score++;
} else {
  console.log('As stated before, yes or no answers please.');
  invalids++;
}
question3Answer = prompt('Do I know how to herd cattle on a motorbike?').toLowerCase();
if (question3Answer === 'y' || question3Answer === 'yes') {
  console.log('Good job, that is correct. It is a bunch of fun but reaaaaally dangerous.');
  score++;
} else if (question3Answer === 'n' || question3Answer === 'no') {
  console.log('Bummer, that is wrong. I have done that alot!');
} else {
  console.log('Really?');
  invalids++;
}
question4Answer = prompt('Do I know how to ride a unicycle?').toLowerCase();
if (question4Answer === 'y' || question4Answer === 'yes') {
  console.log('Nope, incorrect. I am flattered you think I would be so coordinated.');
} else if (question4Answer === 'n' || question4Answer === 'no') {
  console.log('Yep. It is beyond me at the moment and I have no current intentions of learning.');
  score++;
} else {
  console.log('Either you can\'t read, your curious, or dislike playing by the rules.');
  invalids++;
}
question5Answer = prompt('Do I know critical strike range of a longsword and its multiplier off the top of my head?').toLowerCase();
if (question5Answer === 'y' || question5Answer === 'yes') {
  console.log('You can bet your bottom dollar that is correct.');
  score++;
} else if (question5Answer === 'n' || question5Answer === 'no') {
  console.log('Wrong! I did say that I was into DnD. 1d8 18/20 x2');
} else {
  console.log('Welp are you happy with your work?');
  invalids++;
}
