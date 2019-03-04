var Letter = require('./letter');


class Word extends Letter {
    constructor(str) {
        super(str)
        this.newArr = function() {
            var array = [];
            for (var i=0; i < str.length; i++) {
                var newLtr = new Letter(str[i], true);
                array.push(newLtr);
            }
            return array;
        };

        this.letters = this.newArr();

        this.wordDisplay = function() {
            var array = [];
            this.letters.forEach(element => {
                array.push(this.display(element));
            });
            return array.join(' ');
        }

        this.ltrChecker = function(ltr) {
            return this.checker(ltr);
        }



    };

    
};

var newWord = new Word('hello');
console.log(newWord.letters);
console.log(newWord.wordDisplay());
console.log(newWord.ltrChecker());










module.exports = Word;