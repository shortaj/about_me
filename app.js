'use strict';

var score = 0;
var invalids = 0;
var i = 0;
var questionArray = ['Do I speak more than one language?', 'Do I know how to fly a biplane?', 'Do I know how to herd cattle on a motorbike?', 'Do I know how to ride a unicycle?', 'Do I know critical strike range of a longsword and its multiplier off the top of my head?','What is my favorite number? You will have 4 tries at this.'];
var correctResponseArray = ['Correct! I can speak Japanese. As a high school exchange student and have traveled to Japan 5 times now.', 'Hooray! Correct! Do not trust me to fly a plane!', 'Good job, that is correct. It is a bunch of fun but reaaaaally dangerous.', 'Yep. It is beyond me at the moment and I have no current intentions of learning.', 'You can bet your bottom dollar that is correct.', 'That\'s correct, it is the meaning of life afterall.'];
var incorrectResponseArray = ['Sorry, wrong. I speak Japanese. Not much use for it sadly besides my anime.', 'Nope, that is incorrect. I wish.', 'Bummer, that is wrong. I have done that alot!', 'Yep. It is beyond me at the moment and I have no current intentions of learning.', 'Wrong! I did say that I was into DnD. 1d8 18/20 x2', 'Well you had a couple tries, thanks for trying.'];
var userAnswerArray = [];
var yes = (userAnswerArray[i].toLowerCase() === 'y' || userAnswerArray[i].toLowerCase() === 'yes');
var no = (userAnswerArray[i].toLowerCase() === 'no' || userAnswerArray[i].toLowerCase() === 'no');
var correct = function() {
  console.log(correctResponseArray[i]);
  score++;
  i++;
  alert('CORRECT!');
};
var incorrect = function() {
  console.log(incorrectResponseArray[i]);
  i++;
  alert('WRONG!');
};
var error = function() {
  invalids++;
  alert('Yes or no answers please.');
};
var questions = function() {
  if (i > 5) {
    userAnswerArray[i] = prompt(questionArray[i]);
    while (i < 9) {
      if (parseInt(userAnswerArray[i]) === 42 ) {
        alert('Correct!!');
        console.log('You got the right answer!');
        break;
      } else if (parseInt(userAnswerArray[i]) > 42) {
        alert('Too high.');
        i++;
      } else {
        alert('Too low.');
        i++;
      }
    }
  } else {
    while (i < 0) {
      userAnswerArray[i] = prompt(questionArray[i]);
      if (i === 0 && yes) {
        correct;
      } else if (i === 0 && no) {
        incorrect;
      } else if (i === 1 && yes) {
        incorrect;
      } else if (i === 1 && no) {
        correct;
      } else if (i === 2 && yes) {
        correct;
      } else if (i === 2 && no) {
        incorrect;
      } else if (i === 3 && yes) {
        incorrect;
      } else if (i === 3 && no) {
        correct;
      } else if (i === 4 && yes) {
        correct;
      } else if (i === 4 && no) {
        incorrect;
      } else {
        invalids;
      }
    }
  }
};
var finish = function() {
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
};
var tallyUp = function() {
  if (score === 5) {
    console.log('Congratz you got 100%!! It\'s like you already know me.');
  } else if (score >= 3) {
    console.log(score + '/5 isn\'t too bad! Thanks for playing.');
  } else {
    console.log('Thanks for trying!');
  }
};
