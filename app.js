/*

function TodoService() {
    this.todos = [];
}

TodoService.prototype.getAll = function() {
    return this.todos;
}

*/
var TodoService = /** @class */ (function () {
    function TodoService(todos) {
        this.todos = todos;
    }
    TodoService.prototype.add = function (todo) {
        var newId = TodoService.getNextId();
    };
    TodoService.prototype.getAll = function () {
        return this.todos;
    };
    TodoService.getNextId = function () {
        return TodoService.lastId += 1;
    };
    TodoService.lastId = 0;
    return TodoService;
}());
var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 1] = "New";
    TodoState[TodoState["Active"] = 2] = "Active";
    TodoState[TodoState["Complete"] = 3] = "Complete";
    TodoState[TodoState["Deleted"] = 4] = "Deleted";
})(TodoState || (TodoState = {}));
// var todo: Todo = {
//     name: "Pick up drycleaning",
//     get state() {
//         return this._state;
//     },
//     set state(newState) {
//         if(newState == TodoState.Complete) {
//             var canBeCompleted =
//                 this.state == TodoState.Active
//                 || this.state == TodoState.Deleted;
//             if(!canBeCompleted) {
//                 throw "Todo must be Active or Deleted in order to be marked Completed";
//             }
//         }
//         this._state = newState;
//     }
// }
var SmartTodo = /** @class */ (function () {
    function SmartTodo(name) {
        this.name = name;
    }
    Object.defineProperty(SmartTodo.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (newState) {
            if (newState == TodoState.Complete) {
                var canBeCompleted = this.state == TodoState.Active
                    || this.state == TodoState.Deleted;
                if (!canBeCompleted) {
                    throw "Todo must be Active or Deleted in order to be marked Completed";
                }
            }
            this._state = newState;
        },
        enumerable: false,
        configurable: true
    });
    return SmartTodo;
}());
var todo = new SmartTodo("Pick up drycleaning");
todo.state = TodoState.Complete;
todo.state;
