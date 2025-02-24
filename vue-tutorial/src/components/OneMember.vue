<script setup lang="ts">
import { ref, computed } from "vue"

interface Props {
  id: number;
  name: string;
  email: string;
  points: number;
  note?: string;
}
const props = defineProps<Props>()

// このコンポーネント内で利用するポイント数のテンプレート変数
// 親コンポーネントから受け取ったデータを子で変更したいときは、独自の変数を用意して加工する。
const localPoints = ref(props.points)
// このコンポーネント内で加工する算出プロパティ
const localNote = computed((): string => {
  let localNote = props.note
  if (localNote == undefined) {
    localNote = "--"
  }
  return localNote
})

// 対象会員の保有ポイントが変化する。ただし、親コンポーネントの合計ポイントは変化しない
const pointUp = () => {
  localPoints.value++
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
      <dd>{{ localPoints }}</dd>
      <dt>備考</dt>
      <dd>{{ localNote }}</dd>
    </dl>
    <button @click="pointUp">ポイント加算</button>
  </section>
</template>

<style scoped>
.box {
  border: green 1px dashed;
  margin: 10px;
}
</style>