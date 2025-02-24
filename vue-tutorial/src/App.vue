<script setup lang="ts">
import OneSection from './components/OneSection.vue';
import WithModel from './components/WithModel.vue';
</script>

<template>
  <h1>コンポーネント基礎</h1>
  <section>
    <h2>コンポーネント1個</h2>
    <OneSection />
  </section>
  <section>
    <h2>コンポーネントが複数</h2>
    <OneSection />
    <OneSection />
    <OneSection />
  </section>
  <section>
    <h2>v-modelを含むコンポーネント</h2>
    <!-- scriptブロックは個々のコンポーネントで完結し、別の処理として動作する -->
    <WithModel />
    <WithModel />
  </section>
</template>

<style>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style>