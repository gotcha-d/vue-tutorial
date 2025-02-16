<script setup lang="ts">
import { computed, ref } from 'vue';

const number = ref(80)
const showOrNot = computed((): boolean => {
  let showOrNot = false
  const rand = Math.round(Math.random() * 100)
  if (rand >= 50 ) {
    showOrNot = true
  }
  return showOrNot
})

const randomNumber = computed((): number => {
  return Math.round(Math.random() * 100)
})
</script>
<template>
  <p v-if="number >= 50">
    条件に合致したので表示1
  </p>
  <!-- 可読性の観点からv-ifの中に複雑な式を書くのはNG -->
  <p v-if="Math.round(Math.random() * 100) >= 50">
    条件に合致したので表示2
  </p>
  <!-- 条件に合致した場合のみレンダリングされる -->
  <p v-if="showOrNot">
    条件に合致したので表示3
  </p>
  <hr>
  <!-- if, else-if, elseは連続して配置すること -->
  <p v-if="randomNumber >= 80">優です</p>
  <p v-else-if="randomNumber >= 70">良です</p>
  <p v-else-if="randomNumber >= 60">可です</p>
  <!-- v-elseの場合は属性値としての条件指定は不要 -->
  <p v-else>不可です</p>
  <hr>
  <!-- 条件分岐タグは連続して配置する必要があり、次のような記述はできない -->
  <!-- 
  <span v-if="randomNumber >= 80">優です</span>
  <span class="colorRed">すばらしい</span>
  <span v-else-if="randomNumber >= 70">優です</span> 
  -->
  <hr>
  <!-- 複数の子要素の表示を切り替えるには、無駄にdivで囲う必要がある。cssに影響が出る可能性がある -->
  <div v-if="true">
    <img src="./assets/logo.svg" alt="vueのロゴ" height="100px">
    <p>ロゴを表示</p>
  </div>
  <!-- templateタグで回避する -->
  <hr>
  <p>点数は{{ randomNumber }}点
    <template v-if="randomNumber >= 80">
      で優です
      <span style="color: red;">素晴らしい！</span>
    </template>
  </p>
  <hr>
  <section>
    v-ifを使用
    <p v-if="showOrNot">
      条件に合致したので表示
    </p>
  </section>
  <section>
    v-showを使用
    <p v-show="showOrNot">
      条件に合致したので表示
    </p>
  </section>
</template>