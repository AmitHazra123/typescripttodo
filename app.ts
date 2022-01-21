/*

function TodoService() {
    this.todos = [];
}

TodoService.prototype.getAll = function() {
    return this.todos;
}

*/

class TodoService {

    static lastId: number = 0;

    constructor(private todos: Todo[]) {
    }

    add(todo: Todo) {
        var newId = TodoService.getNextId();
    }

    getAll() {
        return this.todos;
    }

    static getNextId() {
        return TodoService.lastId += 1;
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

class SmartTodo {
    _state: TodoState
    name: string;

    get state() {
        return this._state;
    }

    set state(newState) {
        
        if(newState == TodoState.Complete) {
            
            var canBeCompleted =
                this.state == TodoState.Active
                || this.state == TodoState.Deleted;
            
            if(!canBeCompleted) {
                throw "Todo must be Active or Deleted in order to be marked Completed";
            }

        }

        this._state = newState;
    }

    constructor(name: string) {
        this.name = name;
    }
}

var todo = new SmartTodo("Pick up drycleaning");

todo.state = TodoState.Complete;

todo.state;

class TodoStateChanger {
    constructor(private newState: TodoState) {
    }

    canChangeState(todo: Todo): boolean {
        return !!todo;
    }

    changeState(todo: Todo): Todo {
        if(this.canChangeState(todo)) {
            todo.state = this.newState;
        }

        return todo;
    }
}

class CompleteTodoStateChanger extends TodoStateChanger {
    constructor() {
        super(TodoState.Complete);
    }

    canChangeState(todo: Todo): boolean {
        return super.canChangeState(todo) && (
            todo.state == TodoState.Active
            || todo.state == TodoState.Deleted
        );
    }
}