'use strict';


var alertRight = alert('CORRECT!');
var alertWrong = alert('WRONG!');
var score = 0;
var invalids = 0;
var invalidAnswer = alert('Yes or no answers please.');
var questionArray = ['Do I speak more than one language?', 'Do I know how to fly a biplane?', 'Do I know how to herd cattle on a motorbike?', 'Do I know how to ride a unicycle?', 'Do I know critical strike range of a longsword and its multiplier off the top of my head?'];
var correctResponseArray = ['Correct! I can speak Japanese. As a high school exchange student and have traveled to Japan 5 times now.', 'Hooray! Correct! Do not trust me to fly a plane!', 'Good job, that is correct. It is a bunch of fun but reaaaaally dangerous.', 'Yep. It is beyond me at the moment and I have no current intentions of learning.', 'You can bet your bottom dollar that is correct.'];
var incorrectResponseArray = ['Sorry, wrong. I speak Japanese. Not much use for it sadly besides my anime.', 'Nope, that is incorrect. I wish.', 'Bummer, that is wrong. I have done that alot!', 'Yep. It is beyond me at the moment and I have no current intentions of learning.', 'Wrong! I did say that I was into DnD. 1d8 18/20 x2'];


var correct = function() {
  alertRight;
  score++;
}
var incorrect = function() {
  alertWrong;
}
var guessingGame = {'Wrong! I did say that I was into DnD. 1d8 18/20 x2'
  answer1: function(){
    var question1Answer = prompt(questionArray[0]);
    if (question1Answer.toLowerCase() === 'y' || question1Answer.toLowerCase() === 'yes') {
      alertRight;
      console.log('Correct! I can speak Japanese. As a high school exchange student and have traveled to Japan 5 times now.');
      score++;
    } else if (question1Answer.toLowerCase() === 'n' || question1Answer.toLowerCase() === 'no') {
      alertWrong;
      console.log('Sorry, wrong. I speak Japanese. Not much use for it sadly besides my anime.');
    } else {
      invalidAnswer;
      invalids++;
    }
  },
  answer2: '',
  answer3: '',
  answer4: '',
  answer5: '',
  answer6: '',
};
console.log(guessingGame.answer1);
// var question1Answer;
// var question2Answer;
// var question3Answer;
// var question4Answer;
// var question5Answer;
//
// alert('Here\'s a Guessing Game about me. Hope you enjoy. Yes or no answers... although y or n will work in a pinch.');
//
// question1Answer = prompt('Do I speak more than one language?');

//
// question2Answer = prompt('Do I know how to fly a biplane?');
// if (question2Answer.toLowerCase() === 'y' || question2Answer.toLowerCase() === 'yes') {
//   alertWrong;
//   console.log('Nope, that is incorrect. I wish.');
// } else if (question2Answer.toLowerCase() === 'n' || question2Answer.toLowerCase() === 'no') {
//   alertRight;
//   console.log('Hooray! Correct! Do not trust me to fly a plane!');
//   score++;
// } else {
//   invalidAnswer;
//   invalids++;
// }
// question3Answer = prompt('Do I know how to herd cattle on a motorbike?');
// if (question3Answer.toLowerCase() === 'y' || question3Answer.toLowerCase() === 'yes') {
//   alertRight;
//   console.log('Good job, that is correct. It is a bunch of fun but reaaaaally dangerous.');
//   score++;
// } else if (question3Answer.toLowerCase() === 'n' || question3Answer.toLowerCase() === 'no') {
//   alertWrong;
//   console.log('Bummer, that is wrong. I have done that alot!');
// } else {
//   invalidAnswer;
//   invalids++;
// }
// question4Answer = prompt('Do I know how to ride a unicycle?');
// if (question4Answer.toLowerCase() === 'y' || question4Answer.toLowerCase() === 'yes') {
//   alertWrong;
//   console.log('Nope, incorrect. I am flattered you think I would be so coordinated.');
// } else if (question4Answer.toLowerCase() === 'n' || question4Answer.toLowerCase() === 'no') {
//   alertRight;
//   console.log('Yep. It is beyond me at the moment and I have no current intentions of learning.');
//   score++;
// } else {
//   invalidAnswer;
//   invalids++;
// }
// question5Answer = prompt('Do I know critical strike range of a longsword and its multiplier off the top of my head?');
// if (question5Answer.toLowerCase() === 'y' || question5Answer.toLowerCase() === 'yes') {
//   alertRight;
//   console.log('You can bet your bottom dollar that is correct.');
//   score++;
// } else if (question5Answer.toLowerCase() === 'n' || question5Answer.toLowerCase() === 'no') {
//   alertWrong;
//   console.log('Wrong! I did say that I was into DnD. 1d8 18/20 x2');
// } else {
//   invalidAnswer;
//   invalids++;
// }
//
// switch (invalids) {
// case 1:
//   console.log('Just one mistake. I get it. It\'s cool have a point on me.');
//   score++;
//   break;
// case 2:
//   console.log('Couple mistakes no biggie!');
//   break;
// case 3:
//   console.log('Really? At this point I am suprised you did not just blerg the flerg.');
//   break;
// case 4:
//   console.log('Either you can\'t read, your curious, or dislike playing by the rules.');
//   break;
// case 5:
//   var questionArrayAnswers = [question1Answer, question2Answer, question3Answer, question4Answer, question5Answer];
//   for (var i = 0; i <= 5; i++) {
//     console.log(questionArrayAnswers[i]);
//   }
//   console.log('Welp are you happy with your work? Smart ass.');
//   score = -9999;
//   break;
// default:
//   console.log('You have finished the test!');
//
// }
//
// if (score === 5) {
//   console.log('Congratz you got 100%!! It\'s like you already know me.');
// } else if (score >= 3) {
//   console.log(score + '/5 isn\'t too bad! Thanks for playing.');
// } else if (score === -9999) {
//   console.log('Your score is ' + score + ', I hope you are happy!');
// } else {
//   console.log('Thanks for trying!');
// }
