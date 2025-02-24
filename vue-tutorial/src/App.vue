<script setup lang="ts">
import OneSection from './components/OneSection.vue';
import WithModel from './components/WithModel.vue';
import OneInfo from './components/OneInfo.vue';
import OneWeatherInfo from './components/OneWeatherInfo.vue';
import { ref } from "vue"

const propsTitle = ref("（これは親コンポーネントで定義したタイトル）発生した引数")
const rand = Math.round(Math.random() * 10)
const propsContent = ref(rand)

const weatherListInit = new Map<number, Weather>()
weatherListInit.set(1, {id: 1, title: "今日の天気", content: "今日は一日中晴れでしょう"})
weatherListInit.set(2, {id: 2, title: "明日の天気", content: "今日は一日中雨でしょう"})
weatherListInit.set(3, {id: 3, title: "明後日の天気", content: "今日は一日中雪でしょう"})
const weatherList = ref(weatherListInit)
interface Weather {
  id: number;
  title: string;
  content: string;
}
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
  <section>
    <h2>Props基礎 属性に直性に記述</h2>
    <OneInfo 
      v-bind:title="propsTitle"
      v-bind:content="propsContent" />
  </section>
  <section>
    <h2>ループでコンポーネントを生成</h2>
    <OneWeatherInfo 
      v-for="[key, weather] in weatherList"
      v-bind:key="key"
      v-bind:title="weather.title"
      v-bind:content="weather.content"
      />
  </section>
</template>

<style>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style>