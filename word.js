var Letter = require('./letter');

var firstLtr = new Letter('t');
var secondLtr = new Letter('e');
var thirdLtr = new Letter('s');
var fourthLtr = new Letter('t');

var word = [firstLtr, secondLtr, thirdLtr, fourthLtr];

class Word extends Letter {
    constructor(comWord) {
        super(comWord);
        this.comWord = comWord;
    }

    retStr(word) {
        var newLtrArr = [];
        word.forEach(element => {
            var newLtr = this.display(element);
            newLtrArr.push(newLtr)
        });
        console.log(newLtrArr.join(' '));
    };

    checkWord(char) {
        this.checker(char);
    }

    
};

var newWord = new Word('z');

newWord.retStr(word);

// class Rectangle {
//     constructor(height, width) {
//       this.name = 'Rectangle';
//       this.height = height;
//       this.width = width;
//     }
//     sayName() {
//       console.log('Hi, I am a ', this.name + '.');
//     }
//     get area() {
//       return this.height * this.width;
//     }
//     set area(value) {
//       this.height = this.width = Math.sqrt(value);
//     }
//   }
  
//   class Square extends Rectangle {
//     constructor(length) {
//       this.height; // ReferenceError, super needs to be called first!
  
//       // Here, it calls the parent class' constructor with lengths
//       // provided for the Rectangle's width and height
//       super(length, length);
  
//       // Note: In derived classes, super() must be called before you
//       // can use 'this'. Leaving this out will cause a reference error.
//       this.name = 'Square';
//     }
//   }