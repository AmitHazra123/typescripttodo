var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 1] = "New";
    TodoState[TodoState["Active"] = 2] = "Active";
    TodoState[TodoState["Complete"] = 3] = "Complete";
    TodoState[TodoState["Deleted"] = 4] = "Deleted";
})(TodoState || (TodoState = {}));
var todo = {
    name: "Pick up drycleaning",
    state: TodoState.New
};
/**
 * New = 1
 * Active = 2
 * Complete = 3
 * Deleted = 4
 */
function delete1(todo) {
    if (todo.state != TodoState.Complete) {
        throw "Can't delete incomplete task!";
    }
}
