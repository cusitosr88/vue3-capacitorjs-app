<template>
  <q-page class="q-mx-lg q-my-lg">
    <div class="text-h4 text-blue-1 text-weight-bold">What's up</div>
    <div class="q-pa-md">
      <add-todo/>
      <todo-list/>
  </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AddTodo from 'src/components/AddTodo.vue';
import TodoList from 'src/components/TodoList.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    AddTodo,
    TodoList
  },

  setup () {
    return {
    }
  }
});
</script>
