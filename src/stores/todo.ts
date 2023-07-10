import { defineStore } from 'pinia';

export const useCounterStore = defineStore('todo', {
  state: () => ({
    todos: []
  })
});
