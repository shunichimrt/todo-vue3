<template>
  <v-container class="d-flex justify-center mt-5">
    <v-card width="800">
      <v-card-title>TODOリスト</v-card-title>
      <v-card-text>
        <v-row class="text-center">
          <v-col cols="12">
            <v-text-field
              outlined
              @keyup.enter="handleSubmit"
              v-model="todo"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="text-center">
          <ul class="todos-list">
            <li cols="12" v-for="(item, i) in documents" :key="i" class="mt-n6">
              <div class="d-flex flex-start">
                <div class="mr-5">
                  <v-checkbox
                    :class="item.value ? 'text-decoration-line-through' : ''"
                    :label="item.text"
                    v-model="item.value"
                  ></v-checkbox>
                </div>
                <div class="mt-3">
                  <v-btn
                    :disabled="!item.value"
                    color="error"
                    @click="handleDelete(item.id)"
                    >削除</v-btn
                  >
                </div>
              </div>
            </li>
          </ul>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { ref } from '@vue/reactivity'
import setCollection from '../composables/setCollection'
import getCollection from '../composables/getCollection'
import deleteDocument from '../composables/deleteDocument'
export default {
  name: 'HelloWorld',
  setup() {
    const todo = ref(null)
    const { documents } = getCollection()
    const handleSubmit = async () => {
      let params = { text: todo.value }
      await setCollection(params)
      todo.value = null
    }
    const handleDelete = async (id) => {
      await deleteDocument(id)
    }

    return { todo, documents, handleSubmit, handleDelete }
  },
}
</script>

<style>
.todos-list {
  list-style: none;
}
</style>
