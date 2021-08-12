'use strict'

// console.log('hello world');

let userName = prompt('What is your name?');
  alert('Welcome, ' + userName + ', to the only page on the entire internet dedicated to being about ME, George Mead!');

let dogOwnerOriginal = prompt('Do I own a dog?');
// Question 1: correct answer is NO
// console.log(dogOwnerOriginal)
let dogOwner = dogOwnerOriginal.toLowerCase();
if (dogOwner === 'yes') {
  alert('I live in a studio apartment in Ravenna, try again');
} else if (dogOwner === 'no') {
  alert('Correct! But I am a duncle...');
} else {
  alert('Only yes or no answers are acceptable!');
}

let goodDogOriginal = prompt('Do you think Tate R. Tot is a good boy, ' + userName + '?');
// Question 2: Correct answer is Yes
// console.log(goodDogOriginal);
let goodDog = goodDogOriginal.toLowerCase();
if (goodDog === 'yes') {
  let tateTreatOriginal = prompt('Do you want to give Tate a treat ' + userName + '?');
// Question 3a: Correct answer is YES
  // console.log(tateTreatOriginal);
  let tateTreat = tateTreatOriginal.toLowerCase();
    if (tateTreat === 'yes') {
      alert('Tate R. Tot is the best and so are you ' + userName + '!');
    } else {
        alert('Tate gets all ' + userName + 's treats then!');
      }
  } else {
    let whyNotOriginal = prompt('Are you a dog person ' + userName + '?');
// Question 3b: any answer is correct
    // console.log(whyNotOriginal);
    let whyNot = whyNotOriginal.toLowerCase();
    if (whyNot === 'no') {
      alert('I feel bad for you ' + userName + ' because I got like 99 problems but hating dogs aint one');
    } else {
      alert('Then you are giving Tate a treat ' + userName);
    }
  }

let aliensRealOriginal = prompt('Do you think aliens from outer space are real?');
// Question 4: correct answer YES

let aliensReal = aliensRealOriginal.toLowerCase();
if (aliensReal === 'yes') {
  let aliensVisitOriginal = prompt('Have they visited Earth?');
  // Question 5a: correct answer is NO
  console.log(aliensVisitOriginal);
  let aliensVisit = aliensVisitOriginal.toLowerCase();
  if (aliensVisit === 'yes') {
    alert('How do you know this, ' + userName + '? Did you meet one?');
    } else {
      alert('Correct. Aliens want nothing to do with us.');
    }
  } else {
      let hidingAliensOriginal = prompt('Where are they then, ' + userName + ' Are you hiding them!?');
      // Question 5b: any answer is correct
      // console.log(hidingAliensOriginal);
      let hidingAliens = hidingAliensOriginal.toLowerCase();
        if (hidingAliens = 'yes') {
          alert('The government knows')
        } else {
          alert('I literally don\'t believe you, ' + userName)
        }
}

let timesAskedOne = 4;
for (let i = 1; i <= timesAskedOne; i++) {
  let howManyLicks = prompt('How many licks, ' + userName +  ', Does it take to get to the center of a Tootsie Pop?');
// Question 6: correct answer is 3
  if (howManyLicks == 3) {
    alert('Winner! Winner! Chicken Dinner!');
    break 
  } else if (howManyLicks < 3) {
    alert('It only takes you ' + howManyLicks + ' licks to get to the center of a tootsie pop? This isn\'t a race, ' + userName + ' try more licks next time!');
  } else if (howManyLicks > 3) {
    alert('This is way too many licks ' + userName + ', try again!');
  } else {
    alert('What did you do wrong' + userName + '? Try again with numbers this time.');
  }
}

let timesAskedTwo = 6;
for (let i = 1; i <= timesAskedTwo; i++) {
  let howManyRoxannes = prompt('Hey, ' + userName + ', do you remember the hit 1978 song by the Police, Roxanne? How many times does Sting sing Roxanne\'s name?');
// Question 7: correct answer is 26
  if (howManyRoxannes == 26) {
    alert('Winner! Winner! Chicken Dinner!');
    break 
  } else if (howManyRoxannes < 26) {
    alert('Holy moly, ' + userName + ', would Roxanne be such a fun drinking game if Sting only said her name ' + howManyRoxannes + ' times?');
  } else if (howManyRoxannes > 26) {
    alert('I like the confidence ' + userName + ', but there aren\'t even ' + howManyRoxannes + ' Roxannes alive! Try again.');
  } else {
    alert('What did you do wrong ' + userName + '? Try again with numbers this time.');
  }
}
