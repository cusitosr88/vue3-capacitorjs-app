<template>
  <q-list class="q-mt-lg">
    <q-item v-for="item in todos_asc" :key="item.name" tag="label" v-ripple class="itm-card q-my-sm">
      <q-item-section avatar>
        <q-radio v-model="item.category" val="teal" category="teal" />
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-white">{{ item.name }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useTodoStore } from 'src/stores/todo';
export default defineComponent({
  name: 'TodoList',

  setup () {
    const store = useTodoStore()
    const todos_asc = computed(() => store.todos)
    return {
      todos_asc
    }
  }
})
</script>
<style lang="sass" scoped>
.itm-card
  background: rgba(255, 255, 255, 0.12)
  border-radius: 16px
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1)
  backdrop-filter: blur(5.2px)
  -webkit-backdrop-filter: blur(5.2px)
  border: 1px solid rgba(255, 255, 255, 0.23)
</style>
