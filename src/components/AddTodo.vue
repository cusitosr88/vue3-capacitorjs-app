<template>
  <span class="q-py-md q-pb-md text-blue-9">What's on your Todo list?</span>
      <q-input
        v-model="name"
        color="white"
        outlined
        class="text-white q-mt-sm rounded-bold"
      />
      <div class="q-py-md text-blue-9 text-uppercase text-bold">Categories</div>
      <div class="q-gutter-sm">
        <q-radio
          keep-color
          color="purple-14"
          v-model="category"
          val="work"
          label="Work"
          class="radio-card text-grey-2"
        />
        <q-radio
          keep-color
          color="indigo-14"
          v-model="category"
          val="personal"
          label="Personal"
          class="radio-card text-grey-2"
        />
      </div>
      <div class="q-mt-md q-pt-none">
        <q-btn color="purple-14" class="full-width rounded-bold" label="Add todo" />
      </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
export default defineComponent({
  name: 'AddTodo',
  setup () {
    const name: Ref<string> = ref('')
    const category: Ref<string> = ref('personal')
    return {
      name,
      category
    }
  }
})
</script>
<style lang="sass" scoped>
.radio-card
  font-weight: bold
  width: 47%
  height: 80px
  border-radius: 20px
  padding: 30px
  background: rgba(255, 255, 255, 0.12)
  border-radius: 16px
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1)
  backdrop-filter: blur(5.2px)
  -webkit-backdrop-filter: blur(5.2px)
  border: 1px solid rgba(255, 255, 255, 0.23)
</style>
