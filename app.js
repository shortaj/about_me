'use strict';

var score = 0;
var invalids = 0;
var i = 0;
var questionArray = ['Do I speak more than one language?', 'Do I know how to fly a biplane?', 'Do I know how to herd cattle on a motorbike?', 'Do I know how to ride a unicycle?', 'Do I know critical strike range of a longsword, its multiplier, and damage off the top of my head?','What is my favorite number? You will have 4 tries at this.'];
var correctResponseArray = ['Correct! I can speak Japanese. As a high school exchange student and have traveled to Japan 5 times now.', 'Hooray! Correct! Do not trust me to fly a plane!', 'Good job, that is correct. It is a bunch of fun but reaaaaally dangerous.', 'Yep. It is beyond me at the moment and I have no current intentions of learning.', 'You can bet your bottom dollar that is correct.'];
var incorrectResponseArray = ['Sorry, wrong. I speak Japanese. Not much use for it sadly besides my anime.', 'Nope, that is incorrect. I wish.', 'Bummer, that is wrong. I have done that alot!', 'Yep. It is beyond me at the moment and I have no current intentions of learning.', 'Wrong! I did say that I was into DnD. 1d8 18/20 x2'];
var userAnswer;
var userAnswerArray = [];
var correct = function(a) {
  userAnswerArray[i] = a;
  console.log(correctResponseArray[i]);
  score++;
  i++;
  return alert('CORRECT!');
};
var incorrect = function(a) {
  userAnswerArray[i] = a;
  console.log(incorrectResponseArray[i]);
  i++;
  return alert('WRONG!');
};
var error = function(a) {
  userAnswerArray[i] = a;
  invalids++;
  return alert('Yes or no answers please.');
};
//var questions
while (i < 5) {
  userAnswer = prompt(questionArray[i]);
  if (userAnswer === null) {
    alert('Please play the game.');
  } else {
    var yes = (userAnswer.toLowerCase() === 'y' || userAnswer.toLowerCase() === 'yes');
    var no = (userAnswer.toLowerCase() === 'no' || userAnswer.toLowerCase() === 'no');
    if (i === 0 && yes) {
      correct(userAnswer);
    } else if (i === 0 && no) {
      incorrect(userAnswer);
    } else if (i === 1 && yes) {
      incorrect(userAnswer);
    } else if (i === 1 && no) {
      correct(userAnswer);
    } else if (i === 2 && yes) {
      correct(userAnswer);
    } else if (i === 2 && no) {
      incorrect(userAnswer);
    } else if (i === 3 && yes) {
      incorrect(userAnswer);
    } else if (i === 3 && no) {
      correct(userAnswer);
    } else if (i === 4 && yes) {
      correct(userAnswer);
    } else if (i === 4 && no) {
      incorrect(userAnswer);
    } else {
      error(userAnswer);
    }
  }
}
while (i < 9) {
  userAnswerArray[i] = prompt(questionArray[5]);
  if (parseInt(userAnswerArray[i]) === 42 ) {
    alert('Correct!!');
    console.log('You got the right answer!');
    score++;
    break;
  } else if (parseInt(userAnswerArray[i]) > 42) {
    alert('Too high. This is the ' + (i-4)+ '/4 attempts.');
    i++;
  } else if (parseInt(userAnswerArray[i]) < 42){
    alert('Too low. This is the ' + (i-4)+ '/4 attempts.');
    i++;
  } else if (userAnswerArray[i]=== null) {
    alert('Please play the game.');
  } else {
    alert('Numbers please.')
    i++;
  }
}

var finish = function(a) {
  if (a === 1) {
    score++;
    return alert('Just one mistake. I get it. It\'s cool have a point on me.');
  } else if (a === 2) {
    return alert('Couple mistakes no biggie!');
  } else if (a === 3) {
    return alert('Really? At this point I am suprised you did not just blerg the flerg.');
  } else if (a === 4) {
    return alert('Either you can\'t read, your curious, or dislike playing by the rules.');
  } else if (a >= 5) {
    for (var k = 0; k <= 5; k++) {
      console.log(userAnswerArray[k]);
    }
    return alert('Welp are you happy with your work?');
  }
};
var tallyUp = function(a) {
  if (a >= 5) {
    return alert('Congratz you did great! It\'s like you already know me.');
  } else if (a >= 3) {
    return alert(score + '/6 isn\'t too bad! Thanks for playing.');
  } else {
    return alert('Thanks for trying!');
  }
};
finish(invalids);
tallyUp(score);
