function Letter(str, state) {
    this.str = str;
    this.state = state;

    this.checker = function(let) {
        if (this.str == let) {
            this.state = true;
        } else {
            this.state = false;
        }
    };

    this.display = function() {
        if (this.state == true) {
            return str
        } else {
            return '_'
        }
    };
};

// var myLet = new Letter('a', false)
// // myLet.checker('a');
// console.log(myLet.state);
// console.log(myLet.display());

module.exports = Letter;