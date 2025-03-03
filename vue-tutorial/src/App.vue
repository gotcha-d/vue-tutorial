<script setup lang="ts">
import { computed } from "vue"
import { useCounterStore } from "./store/counter";

const counterStore = useCounterStore()
const count = computed(() => {
  return counterStore.counter
})
const doubleCount = computed(() => {
  return counterStore.doubleCount
})
const onIncrementClick = (): void => {
  counterStore.incrementCount()
}
</script>

<template>
  <p>現在のポイント: {{ count }}</p>
  <p>現在のポイントさらに倍： {{ doubleCount }}</p>
  <button type="button" @click="onIncrementClick">加算</button>
</template>