var array = [1, 2, 3];
var array2 = [1, 2, 3];
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    return KeyValuePair;
}());
var pair1 = new KeyValuePair(1, 'First');
var pair2 = new KeyValuePair('Second', new Date(Date.now()));
var pair3 = new KeyValuePair(3, 'Third');
var KeyValuePirPrinter = /** @class */ (function () {
    function KeyValuePirPrinter(pairs) {
        this.pairs = pairs;
    }
    KeyValuePirPrinter.prototype.print = function () {
        for (var _i = 0, _a = this.pairs; _i < _a.length; _i++) {
            var p = _a[_i];
            console.log("".concat(p.key, ": ").concat(p.value));
        }
    };
    return KeyValuePirPrinter;
}());
var printer = new KeyValuePirPrinter([pair1, pair3]);
printer.print();
