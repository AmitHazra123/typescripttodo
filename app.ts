/*

function TodoService() {
    this.todos = [];
}

TodoService.prototype.getAll = function() {
    return this.todos;
}

*/

class TodoService {

    private static lastId: number = 0;

    private get nextId() {
        return TodoService.getNextId();
    }

    private set nextId(nextId) {
        TodoService.lastId = nextId - 1;
    }

    constructor(private todos: Todo[]) {
    }

    add(todo: Todo) {
        var newId = TodoService.getNextId();
    }

    private getAll() {
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

    constructor(public name: string) {
    }
}

var todo = new SmartTodo("Pick up drycleaning");

todo.state = TodoState.Complete;

todo.state;

abstract class TodoStateChanger {
    constructor(protected newState: TodoState) {
    }

    abstract canChangeState(todo: Todo): boolean;

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
        this.newState;
    }

    canChangeState(todo: Todo): boolean {
        return !!todo && (
            todo.state == TodoState.Active
            || todo.state == TodoState.Deleted
        );
    }
}