var $ = function (selector) {
    // Find DOM Element
};
$.version = 1.12;
$.fn.todo = function (todo) {
    if (todo) {
        $(this).data('todo', todo);
    }
    else {
        return $(this).data('todo');
    }
};
var todo = { name: "Pick up drycleaning" };
var container = $('#container');
container.data('todo', todo);
var savedTodo = container.data('todo');
container.todo(todo);
