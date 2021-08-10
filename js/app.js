'use strict'

// console.log('hello world');

let userName = prompt('What is your name?');
  alert('Welcome ' + userName + ' to the only page on the entire internet dedicated to being about ME, George Mead!');

let dogOwnerOriginal = prompt('Do I own a dog?');
// console.log(dogOwnerOriginal)
let dogOwner = dogOwnerOriginal.toLowerCase();
if (dogOwner === 'yes') {
  alert('I live in a studio apartment in Ravenna, try again');
} else if (dogOwner === 'no') {
  alert('Correct! But I am a duncle...');
} else {
  alert('Only yes or no answers are acceptable!');
}

let goodDogOriginal = prompt('Do you think Tate R. Tot a good boy, ' + userName + '?');
// console.log(goodDogOriginal);
let goodDog = goodDogOriginal.toLowerCase();
if (goodDog === 'yes') {
  let tateTreatOriginal = prompt('Do you want to give Tate a treat ' + userName + '?');
  // console.log(tateTreatOriginal);
  let tateTreat = tateTreatOriginal.toLowerCase();
    if (tateTreat === 'yes') {
      alert('Tate R. Tot is the best and so are you ' + userName + '!');
    } else {
        alert('Tate gets all ' + userName + 's treats then!');
      }
  } else {
    let whyNotOriginal = prompt('Are you a dog person ' + userName + '?');
    // console.log(whyNotOriginal);
    let whyNot = whyNotOriginal.toLowerCase();
    if (whyNot === 'no') {
      alert('I feel bad for you ' + userName + ' because I got like 99 problems but hating dogs aint one');
    } else {
      alert('Then you are giving Tate a treat ' + userName);
    }
  }

let aliensRealOriginal = prompt('Do you think aliens from outer space are real?');
// console.log(aliensRealOriginal);
let aliensReal = aliensRealOriginal.toLowerCase();
if (aliensReal === 'yes') {
  let aliensVisitOriginal = prompt('Have they visited Earth?');
  console.log(aliensVisitOriginal);
  let aliensVisit = aliensVisitOriginal.toLowerCase();
  if (aliensVisit === 'yes') {
    alert('Only an alien could be so sure about this answer ...');
    } else {
      alert('Only an alien could be so sure about this answer ...');
    }
  } else {
    alert('Space is like so big ' + userName + ', for sure they exist!');
  }