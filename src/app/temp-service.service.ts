import {Injectable} from '@angular/core';
import {Todo} from './todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class TempService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for todo's
  todos: Todo[] = [];

  constructor() {
  }

  // Simulate POST /todos
  addTodo(todo: Todo): Observable<Todo> {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return Observable.of(todo);
    
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): Observable<TempService> {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return Observable.of(this);
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Observable<Todo> {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return Observable.of(todo);
  }

  // Simulate GET /todos
  getAllTodos(): Observable<Todo[]> {
    return Observable.of(this.todos);
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo){
    let casttodo = <Todo> todo;
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

}

