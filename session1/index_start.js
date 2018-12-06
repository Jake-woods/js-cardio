// CHALLENGE 1: REVERSE A STRING - COMPLETE
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  return str.split('').reverse().join('');
}


// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  // Not case sensitive now
  str = str.toUpperCase();
  // Split the string, reverse the array and convert it back to string
  let reverseStr = str.split('').reverse().join('');
  // Return
  return str === reverseStr;
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  let revInt = String(int).split('').reverse().join('');
  return parseInt(revInt) * Math.sign(int);
}


// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  return str.toLowerCase().split(' ').map((word) => {
    return word[0].toUpperCase() + word.substr(1);
  }).join(' ');
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {

    if ((i % 5 === 0) && (i % 3 === 0)) { //Multiple of 3 and 5
      console.log('FizzBuzz');
    } else if (i % 3 === 0) { //Multiple of 3
      console.log('Fizz')
    } else if (i % 5 === 0) { //Multiple of 5
      console.log('Buzz')
    } else { //Number that is not Multile of 5 or 3
      console.log(i);
    }
  }
}
fizzBuzz();