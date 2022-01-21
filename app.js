var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function totalLength(x, y) {
    var total = x.length + y.length;
    return total;
}
var CustomArray = /** @class */ (function (_super) {
    __extends(CustomArray, _super);
    function CustomArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CustomArray;
}(Array));
var length = totalLength([1, 2, 3], 'asdfasdf');
