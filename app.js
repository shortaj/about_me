'use strict';


var alertRight = alert('CORRECT!');
var alertWrong = alert('WRONG!');
var score = 0;
var invalids = 0;
var i = 0
var invalidAnswer = alert('Yes or no answers please.');
var questionArray = ['Do I speak more than one language?', 'Do I know how to fly a biplane?', 'Do I know how to herd cattle on a motorbike?', 'Do I know how to ride a unicycle?', 'Do I know critical strike range of a longsword and its multiplier off the top of my head?','What is my favorite number?'];
var correctResponseArray = ['Correct! I can speak Japanese. As a high school exchange student and have traveled to Japan 5 times now.', 'Hooray! Correct! Do not trust me to fly a plane!', 'Good job, that is correct. It is a bunch of fun but reaaaaally dangerous.', 'Yep. It is beyond me at the moment and I have no current intentions of learning.', 'You can bet your bottom dollar that is correct.', 'That\'s correct, it is the meaning of life afterall.'];
var incorrectResponseArray = ['Sorry, wrong. I speak Japanese. Not much use for it sadly besides my anime.', 'Nope, that is incorrect. I wish.', 'Bummer, that is wrong. I have done that alot!', 'Yep. It is beyond me at the moment and I have no current intentions of learning.', 'Wrong! I did say that I was into DnD. 1d8 18/20 x2', 'Well you had a couple tries, thanks for trying.'];
var userAnswer;
var userAnswerArray = [];

var correct = function() {
  alertRight;
  console.log(correctResponseArray[i]);
  score++;
  if (i === 5) { break; }
  i++;
}
var incorrect = function() {
  alertWrong;
  console.log(incorrectResponseArray[i]);
  if (i === 5) { break; }
  i++;
}
var error = function() {
  invalidAnswer;
  if (i === 5) { break; }
  invalids++;
}
var guessingGame = {
  answer: function(){
    userAnswer = prompt(questionArray[i]);
    userAnswerArray.push(userAnswer);
    if (userAnswer.toLowerCase() === 'y' || userAnswer.toLowerCase() === 'yes') {
      correct;
    } else if (userAnswer.toLowerCase() === 'n' || userAnswer.toLowerCase() === 'no') {
      incorrect;
    } else {
      error;
    }
  },
  finish: function() {
    if (invalids === 1) {
      console.log('Just one mistake. I get it. It\'s cool have a point on me.');
      score++;
    } else if (invalids === 2) {
      console.log('Couple mistakes no biggie!');
    } else if (invalids === 3) {
      console.log('Really? At this point I am suprised you did not just blerg the flerg.');
    } else if (invalids === 4) {
      console.log('Either you can\'t read, your curious, or dislike playing by the rules.');
    } else if (invalids >= 5) {
      for (var k = 0; k <= 5; k++) {
        console.log(userAnswerArray[k]);
      }
      console.log('Welp are you happy with your work? Smart ass.');
    }
    if (score === 5) {
      console.log('Congratz you got 100%!! It\'s like you already know me.');
    } else if (score >= 3) {
      console.log(score + '/5 isn\'t too bad! Thanks for playing.');
    } else {
      console.log('Thanks for trying!');
  },
};
for (var j = 0; j < questionArray.length; j++) {
  guessingGame.answer;
}
guessingGame.finish;
