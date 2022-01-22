import { Todo as TodoTask, TodoState } from './model';
import './jQuery';

let todo: TodoTask;

interface IHaveALength {
    length: number;
}

function totalLength<T extends IHaveALength, U extends IHaveALength>(x: T, y: U) {
    var total: number = x.length + y.length;
    return total;
}

class CustomArray<T> extends Array<T> {}

var length = totalLength([1, 2, 3], 'asdfasdf');