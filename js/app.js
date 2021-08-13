'use strict'

// console.log('hello world');

let userName = prompt('What is your name?');
  alert('Welcome, ' + userName + ', to the only page on the entire internet dedicated to being about ME, George Mead!');

let finalTally = 0;

function dogOwnerF() {
  let dogOwnerOriginal = prompt('Do I own a dog?');
  // Question 1: correct answer is NO
  // console.log(dogOwnerOriginal)
  let dogOwner = dogOwnerOriginal.toLowerCase();
  if (dogOwner === 'yes') {
    finalTally++
    alert('I live in a studio apartment in Ravenna, try again');
  } else if (dogOwner === 'no') {
    // let scoreOne = 0
    alert('Correct! But I am a duncle...');
  } else {
    alert('Only yes or no answers are acceptable!');
  }
}
 dogOwnerF();
// if (dogOwner === 'no') {
//   let finalTally++ 
// } else {
// }
function goodDogF(){
  let goodDogOriginal = prompt('Do you think Tate R. Tot is a good boy, ' + userName + '?');
  // Question 2: Correct answer is Yes
  // console.log(goodDogOriginal);
  let goodDog = goodDogOriginal.toLowerCase();
  if (goodDog === 'yes') {
    finalTally++
    let tateTreatOriginal = prompt('Do you want to give Tate a treat ' + userName + '?');
  // Question 2a: any answer is correct
    // console.log(tateTreatOriginal);
    let tateTreat = tateTreatOriginal.toLowerCase();
      if (tateTreat === 'yes') {
        alert('Tate R. Tot is the best and so are you ' + userName + '!');
      } else {
          alert('Tate gets all ' + userName + 's treats then!');
        }
    } else {
      let whyNotOriginal = prompt('Are you a dog person ' + userName + '?');
  // Question 2b: any answer is correct
      // console.log(whyNotOriginal);
      let whyNot = whyNotOriginal.toLowerCase();
      if (whyNot === 'no') {
        alert('I feel bad for you ' + userName + ' because I got like 99 problems but hating dogs aint one');
      } else {
        alert('Then you are giving Tate a treat ' + userName);
      }
  }
}
 goodDogF();
// if (goodDog === 'yes') {
//   let (finalTally++)
// } else {
//   let finalTally = finalTally
// }
function aliensRealF(){
  let aliensRealOriginal = prompt('Do you think aliens from outer space are real?');
  // Question 3: correct answer YES
  let aliensReal = aliensRealOriginal.toLowerCase();
  if (aliensReal === 'yes') {
    finalTally++
    let aliensVisitOriginal = prompt('Have they visited Earth?');
    // Question 3a: any answer is correct
    console.log(aliensVisitOriginal);
    let aliensVisit = aliensVisitOriginal.toLowerCase();
    if (aliensVisit === 'yes') {
      alert('How do you know this, ' + userName + '? Did you meet one?');
      } else {
        alert('Correct. Aliens want nothing to do with us.');
      }
    } else {
        // let scoreThree = 0
        let hidingAliensOriginal = prompt('Where are they then, ' + userName + '? Are you hiding them!?');
        // Question 3b: any answer is correct
        // console.log(hidingAliensOriginal);
        let hidingAliens = hidingAliensOriginal.toLowerCase();
          if (hidingAliens = 'yes') {
            alert('The government knows ' + userName + '!')
          } else {
            alert('I literally don\'t believe you, ' + userName)
          }
  }
}
 aliensRealF();
// if (aliensReal === 'yes') {
//   let finalTally = finalTally + 1
// } else {
//   let finalTally = finalTally
// }
function howManyLicksF(){
  let timesAskedOne = 4;
  for (let i = 1; i <= timesAskedOne; i++) {
    let howManyLicks = prompt('How many licks, ' + userName +  ', does it take to get to the center of a Tootsie Pop?');
  // Question 4: correct answer is 3
    if (howManyLicks == 3) {
      finalTally++
      alert('Winner! Winner! Chicken Dinner!');
      break 
    } else if (howManyLicks < 3) {
      // let scoreFour = 0
      alert('It only takes you ' + howManyLicks + ' licks to get to the center of a tootsie pop? This isn\'t a race, ' + userName + ' try more licks next time!');
    } else if (howManyLicks > 3) {
      // let scoreFour = 0
      alert('This is way too many licks ' + userName + ', don\'t you remember how many it took the wise owl?');
    } else {
      // let scoreFour = 0
      alert('What did you do wrong' + userName + '? Try again with numbers this time.');
    }
  }
}
howManyLicksF();
// if (howManyLicks == 3) {
//   let finalTally = finalTally + 1
// } else {
//   let finalTally = finalTally
// }
function howManyRoxannesF(){
  let timesAskedTwo = 6;
  for (let i = 1; i <= timesAskedTwo; i++) {
    let howManyRoxannes = prompt('Hey, ' + userName + ', do you remember the hit 1978 song by the Police, Roxanne? How many times does Sting sing Roxanne\'s name?');
  // Question 5: correct answer is 26
    if (howManyRoxannes == 26) {
      finalTally++
      alert('Winner! Winner! Chicken Dinner!');
      break 
    } else if (howManyRoxannes < 26) {
      // let scoreFive = 0
      alert('Holy moly, ' + userName + ', would Roxanne be such a fun drinking game if Sting only said her name ' + howManyRoxannes + ' times? Hint: it\'s more than a quarter but less than a third');
    } else if (howManyRoxannes > 26) {
      // let scoreFive = 0
      alert('I like the confidence ' + userName + ', but there aren\'t even ' + howManyRoxannes + ' Roxannes alive! Try again. Hint: it\'s more than a quarter but less than a third');
    } else {
      // let scoreFive = 0
      alert('What did you do wrong ' + userName + '? Try again with numbers this time.');
    }
  }
}
howManyRoxannesF();
// if (howManyRoxannes == 26) {
//   let finalTally = finalTally + 1
// } else {
//   let finalTally = finalTally
// }

// let finalTally = scoreOne + scoreTwo + scoreThree + scoreFour + scoreFive
if (finalTally >= 4) {
  alert('Congratulations ' + userName + '! You really get me! You got ' + finalTally + " out of 5 scored questions!")
} else if (finalTally < 4) {
    alert('Ooooh, this is embarassing, ' + userName + '. You only got ' + finalTally + ' out of 5 possible questions.')
}
