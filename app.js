var _a;
var array = [123, "Pick up drycleaning", false];
var id = array[0], title = array[1], completed = array[2];
var a = 1;
var b = 5;
_a = [b, a], a = _a[0], b = _a[1];
function getTodo(id) {
    var todo = {
        id1: 123,
        title1: "Pick up drycleaning",
        completed1: false
    };
    return todo;
}
var _b = getTodo(123), id1 = _b.id1, title1 = _b.title1, completed1 = _b.completed1;
function countdown(_a) {
    var initial = _a.initial, _b = _a.final, final = _b === void 0 ? 0 : _b, _c = _a.interval, interval = _c === void 0 ? 1 : _c, current = _a.initial;
    while (current > final) {
        console.log(current);
        current -= interval;
    }
}
