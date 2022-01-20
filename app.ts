enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}

interface Todo {
    name: string;
    state: TodoState;
}

var todo: Todo = {
    name: "Pick up drycleaning",
    state: TodoState.New
}

/**
 * New = 1
 * Active = 2
 * Complete = 3
 * Deleted = 4
 */

function delete1(todo: Todo) {
    if(todo.state != TodoState.Complete) {
        throw "Can't delete incomplete task!"
    }
}