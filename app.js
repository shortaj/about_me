'use strict';

var userName = prompt('What\'s your name?');
alert ('Hi, ' + userName + '! Welcome to my about me page. Let\'s play a guessing game.');

function answers(correctAnswers) {

  correctAnswers = 0;

  var questionsArray = ['Do you think I have a dog?', 'Am I a vegan?', 'Ture or false: I am from Montana.', 'Do you think I\'m an apple person?', 'Do you think I have an Android phone?'];
  var answersArray = ['Correct! I have a dog named Vincent.', 'You are right!', 'You are correct!', 'True! I am a Windows person.', 'Correct!'];
  var invalidAnswer = 'I didn\'t understand your answer.';
  var incorrectAnswersArray = ['False, I have a dog named Vincent.', 'False!', 'Incorrect!', 'False! I prefer Windows.', 'False! I like Android phones.'];

  var isAnswerCorrect = [];

  var correctAnswerFunction function() {

  };

  var incorrectAnswerFunction function () {

  };


  var pet = prompt('Do you think I have a dog?').toUpperCase();
  if (pet === 'YES') {
    alert('Correct! I have a dog named Vincent.');
    correctAnswers++;
    alert('Your score is now ' + correctAnswers + ' out of 7.');
    console.log(correctAnswers);
  } else if (pet === 'NO') {
    alert('False! I have a dog named Vincent.');
  } else {
    alert('I didn\'t understand your answer.');
    };

    console.log('Do you think I have a dog?');
    console.log(pet);

    var diet = prompt('Am I a vegan?').toUpperCase();
    if (diet === 'YES') {
      alert('You are right!');
      correctAnswers++;
      alert('Your score is now ' + correctAnswers + ' out of 7.');
    } else if (diet === 'NO') {
      alert('False!');
    } else {
      alert('Your answer didn\'t make sense to me.')
    };

    console.log('Am I a vegan?')
    console.log(diet);

    var homeState = prompt('True or false: I am from Montana.').toUpperCase();
    if (homeState === 'TRUE') {
      alert('You are correct!');
      correctAnswers++;
      alert('Your score is now ' + correctAnswers + ' out of 7.');
    } else if (homeState === 'FALSE') {
      alert('Incorrect!');
    } else {
      alert('Your answer doesn\'t make sense.');
    }

    console.log('True or false: I am from Montana.');
    console.log(homeState);

    var computer = prompt('Do you think I\'m an Apple person?').toUpperCase();
    if (computer === 'NO') {
      alert('True! I prefer Windows.');
      correctAnswers++;
      alert('Your score is now ' + correctAnswers + ' out of 7.');
    } else if (computer === 'NO') {
      alert('False! I am a Windows girl.');
    } else {
      alert('I didn\'t quite understand that answer.');
    }

    console.log('Do you think I\'m an Apple person?');
    console.log(computer);

    var phone = prompt('Do you think I have an Android phone?').toUpperCase();
    if (phone === 'NO') {
      alert('False, I prefer Android phones.');
    } else if (phone === 'YES') {
      alert('Correct!');
      correctAnswers++;
      alert('Your score is now ' + correctAnswers + ' out of 7.');
    } else {
      alert('That answer didn\'t make sense.')
    }

    console.log('Do you think I have an Android phone?');
    console.log(phone);




  function numberGuessingGame(){
    for (var i = 1; i < 5; i++) {
      var userAnswer = prompt('Let\'s play a number guessing game! What number am I thinking of? You have 4 tries.');

      if (parseInt(userAnswer) === 32 ) {
        alert('Correct!');
        alert('You got the right answer!');
        correctAnswers++;
        alert('Your final score is ' + correctAnswers + ' out of 7.');
        break;
      } else if (parseInt(userAnswer) > 32) {
        alert('Too high.');
      } else if (parseInt(userAnswer) < 32){
        alert('Too low.');
      }
      if (i === 4){
        alert('Bummer! You used up all of your tries. The number was 32. Your score is ' + correctAnswers + ' out of 7.');
        break;
        console.log('Final score: ' + correctAnswers);
      }

    }
  }
  numberGuessingGame();

  function countryVisited(){
    for (var i = 1; i < 7; i++) {
      var country = prompt('Can you guess a country I have visited?').toUpperCase();

      if (country === 'JAMAICA') {
        alert('Correct!');
        alert('Other possible answers include Canada and Mexico.');
        correctAnswers++;
        alert('Your final score is ' + correctAnswers + ' out of 7.');
        break;
      } else if (country === 'MEXICO') {
        alert('Correct!');
        alert('Other possible answers include Canada and Jamaica.');
        correctAnswers++;
        alert('Your final score is ' + correctAnswers + ' out of 7.');
        break;
      } else if (country === 'CANADA') {
        alert('Correct!');
        alert('Other possible answers include Mexico and Jamaica.');
        correctAnswers++;
        alert('Your final score is ' + correctAnswers + ' out of 7.');
        break;
      } else {
        alert('Nope, try again.');
      }
      if (i === 6){
        alert('Bummer! You used up all of your tries. Possible answers include Jaimaica, Mexico and Cananda. Your final score is ' + correctAnswers + ' out of 7.');
        break;
        console.log('Final score: ' + correctAnswers);
      }

    }
  }
  countryVisited();
}



answers();
