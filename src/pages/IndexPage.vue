<template>
  <q-page class="q-mx-lg q-my-lg">
    <div class="text-h4 text-blue-1 text-weight-bold">What's up</div>
    <div class="q-pa-md">
      <add-todo/>
      <q-list class="q-mt-lg">
      <q-item tag="label" v-ripple class="itm-card q-my-sm">
        <q-item-section avatar>
          <q-radio v-model="category" val="teal" category="teal" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Teal</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AddTodo from 'src/components/AddTodo.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    AddTodo
  },

  setup () {
    return {
    }
  }
});
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
