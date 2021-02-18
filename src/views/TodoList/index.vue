<script>
import { onMounted, reactive, ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    /** 選取資料狀態 all , active , done */
    const filter = "all";
    const list = computed(() => {
      return store.getters.filterList(filter);
    });
    return {
      filter,
      list,
    };
  },
};
</script>

<template>
  <h1>TodoList Page</h1>
  <p>show: {{ filter }}</p>
  <div>{{ list }}</div>
</template>

<style></style>
