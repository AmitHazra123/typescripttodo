System.register(["./model", "./DataAccess"], function (exports_1, context_1) {
    "use strict";
    var model_1, DataAccess_1, service, todos;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (model_1_1) {
                model_1 = model_1_1;
            },
            function (DataAccess_1_1) {
                DataAccess_1 = DataAccess_1_1;
            }
        ],
        execute: function () {
            service = new DataAccess_1.TodoService([]);
            service.add({
                id: 1,
                name: 'Pick up drycleaning',
                state: model_1.TodoState.New
            });
            todos = service.getAll();
            todos.forEach(function (todo) {
                return console.log("".concat(todo.name, " [").concat(model_1.TodoState[todo.state], "]"));
            });
        }
    };
});
