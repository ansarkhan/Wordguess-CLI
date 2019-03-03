class Letter {
    constructor(str, state) {
        this.str = str;
        this.state = state || false ;
    }

    checker(ltr) {
        if (this.str == ltr) {
            this.state = true;
        } else {
            this.state = false;
        }
    };

    display() {
        if (this.state == true) {
            return this.str
        } else {
            return '_'
        }
    };
};

var myLet = new Letter('a')
// myLet.checker('a');
// console.log(myLet.state);
// console.log(myLet.display());

module.exports = Letter;
