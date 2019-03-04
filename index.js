var Word = require('./word');
var inquirer = require("inquirer");


// inquirer.prompt([
//     {
//             name: "letter",
//             message: "Guess a letter"
//     }
// ]).then(function(answer) {
//     console.log(answer.letter);
// });

// console.log(Word);

// class Word {
//     constructor (string) {
//         this.createArray = function() {
//             let array = [];
//             for (let i=0; i < string.length; i++) {
//                 let currentLetter = new Letter(string[i],false);
//                 array.push(currentLetter);
//             }
//             return array;
//         }
//         this.letters = this.createArray();
//         this.toString = function() {
//             let word = '';
//             this.letters.forEach(letter => {
//                 let currentChar = letter.toString();
//                 word += currentChar;
//             });
//             return word;
//         }
//         this.check = function (guessChar) {
//             let letterCorrect = false;
//             this.letters.forEach(letter => {
//                 let letterCheck = letter.check(guessChar);
//                 if (letterCheck) {
//                     letterCorrect = true;
//                 }
//             });
//             return letterCorrect;
//         }
//         this.guessed = function() {
//             let isGuessed = true;
//             this.letters.forEach(letter => {
//                 if (!letter.guessed) {
//                     isGuessed = false;
//                 }
//             });
//             return isGuessed;
//         }
//     }
// }
