var container = document.getElementById('container');
var todo = {
    id: 123,
    name: "Pick up drycleaning",
    completed: true
};
var displayName = "Todo #".concat(todo.id);
container.innerHTML = "\n<div todo='".concat(todo.id, "' class=\"list-group-item\">\n    <i class=\"").concat(todo.completed ? "" : "hidden", "\"></i>\n    <span class=\"name\">").concat(todo.name, "</span>\n</div>\n");
