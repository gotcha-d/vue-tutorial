<script setup lang="ts">
import { ref, computed } from "vue"

interface Props {
  id: number;
  name: string;
  email: string;
  points: number;
  note?: string;
}
const props = withDefaults(
  defineProps<Props>(),
  {note: "--"}
)

// Emitインターフェースの定義
interface Emits {
  (emit: "update:points", newPoint: number): void
}
const emit = defineEmits<Emits>()

// このコンポーネント内で利用するポイント数のテンプレート変数
// 親コンポーネントから受け取ったデータを子で変更したいときは、独自の変数を用意して加工する。
const localPoints = ref(props.points)

const onInput = (event: Event) => {
  const element = event.target as HTMLInputElement
  const inputPoints = Number(element.value)
  emit("update:points", inputPoints)
}
</script>

<template>
  <section class="box">
    <h4>{{ name }}さんの情報</h4>
    <dl>
      <dt>ID</dt>
      <dd>{{ id }}</dd>
      <dt>メールアドレス</dt>
      <dd>{{ email }}</dd>
      <dt>保有ポイント</dt>
      <dd>
        <input type="number" v-bind:value="points" v-on:input="onInput">
      </dd>
      <dt>備考</dt>
      <dd>{{ note }}</dd>
    </dl>
  </section>
</template>

<style scoped>
.box {
  border: green 1px dashed;
  margin: 10px;
}
</style>