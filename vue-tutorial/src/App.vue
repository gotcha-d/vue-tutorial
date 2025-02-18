<script setup lang="ts">
import { ref } from "vue"

const cocktailListInit: string[] = [
  "ホワイトレディ",
  "ブルーハワイ",
  "ニューヨーク"
]
const cocktailList = ref(cocktailListInit)

const cocktailDicInit: {[key: number]: string} = {
  2345: "ホワイトレディ",
  4412: "ブルーハワイ",
  6792: "ニューヨーク",
}
const cocktailDic = ref(cocktailDicInit)

const cocktailMapInit = new Map<number, string>()
cocktailMapInit.set(2345, "ホワイトレディ")
cocktailMapInit.set(4472, "ブルーハワイ")
cocktailMapInit.set(6792, "ニューヨーク")
const cocktailMap = ref(cocktailMapInit)

const whiteLadyInit: {
  id: number;
  name: string;
  price: number;
  recipe: string;
} = {
  id: 2345,
  name: "ホワイトレディ",
  price: 1200,
  recipe: "ジン30ml+コワントロー15ml+レモン果汁15ml"
}
const whiteLady = ref(whiteLadyInit)
</script>

<template>
  <ul>
    <li
      v-for="cocktailName in cocktailList"
      v-bind:key="cocktailName"
      >
      {{ cocktailName }}
    </li>
  </ul>
  <ul>
    <li
      v-for="(cocktailName, index) in cocktailList"
      >
      {{ cocktailName }} (インデックス{{ index }})
    </li>
  </ul>
  <ul>
    <li
      v-for="(cocktailName, id) in cocktailDic"
      v-bind:key="'cocktailList' + id"
      >
      IDが{{ id }}のカクテルは{{ cocktailName }}
    </li>
  </ul>
  <ul>
    <li
      v-for="(cocktailName, id, index) in cocktailDic"
      v-bind:key="'cocktailListWithIdx' + id"
      >
      {{ index + 1 }}: IDが{{ id }}のカクテルは{{ cocktailName }}
    </li>
  </ul>
  <ul>
    <li
      v-for="[id, cocktailName] in cocktailMap"
      v-bind:key="id"
      >
      <!-- Mapのループは[]ブラケットで囲う -->
      IDが{{ id }}のカクテルは{{ cocktailName }}
    </li>
  </ul>
  <dl>
    <template
      v-for="(value, key) in whiteLady"
      v-bind:key="key"
      >
      <dt>{{ key }}</dt><dd>{{ value }}</dd>
    </template>
  </dl>
</template>