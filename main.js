var Myfirstprogram = /** @class */ (function () {
    function Myfirstprogram() {
        var argArray = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argArray[_i] = arguments[_i];
        }
        this.printArgs(argArray);
    }
    Myfirstprogram.prototype.printArgs = function (argArray) {
        console.log(argArray);
    };
    Myfirstprogram.prototype.runFirst = function (callback) {
        console.log('this method runs first...!');
    };
    Myfirstprogram.prototype.runLast = function () {
        console.log('this method runs last!');
    };
    return Myfirstprogram;
}());
var newInstance = new Myfirstprogram("a", "b", "c");
