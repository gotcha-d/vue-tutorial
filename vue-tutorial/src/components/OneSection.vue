<script setup lang="ts">
interface Props {
  rand: number
}
defineProps<Props>()

interface Emits {
  (event: "createNewRand"): void
}
const emit = defineEmits<Emits>()

const onNewRandomButtonClick = () => {
  emit("createNewRand")
}
</script>

<template>
  <section class="box">
    <p>子コンポーネントで乱数を表示: {{ rand }}</p>
    <button @click="onNewRandomButtonClick">あたらしい乱数を生成</button>
  </section>
</template>

<style>
.box {
  border: green 1px dashed;
  margin: 10px;
}
</style>