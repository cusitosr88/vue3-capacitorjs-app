import { defineStore } from 'pinia';
import { Todo } from 'src/components/models';

interface TodoStore {
  todos: Todo[];
}
export const useTodoStore = defineStore('todo', {
  state: (): TodoStore => ({
    todos: []
  }),
  actions: {
    addTodo(todo: Todo) {
      this.todos.push(todo);
    }
  }
});
