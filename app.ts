/*

function TodoService() {
    this.todos = [];
}

TodoService.prototype.getAll = function() {
    return this.todos;
}

*/

class TodoService {

    constructor(private todos: Todo[]) {
    }

    getAll() {
        return this.todos;
    }
}

enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}

interface Todo {
    name: string,
    state: TodoState
}

var todo: Todo = {
    name: "Pick up drycleaning",
    state: TodoState.New
}