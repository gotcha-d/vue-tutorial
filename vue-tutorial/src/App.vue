<script setup lang="ts">
import { ref } from "vue"

const cocktailListInit: string[] = [
  "ホワイトレディ",
  "ブルーハワイ",
  "ニューヨーク"
]
const cocktailList = ref(cocktailListInit)

const cocktailObjInit: {[key: number]: string} = {
  2345: "ホワイトレディ",
  4412: "ブルーハワイ",
  6792: "ニューヨーク",
}
const cocktailObj = ref(cocktailObjInit)
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
      v-for="(cocktailName, id) in cocktailObj"
      v-bind:key="'cocktailList' + id"
      >
      IDが{{ id }}のカクテルは{{ cocktailName }}
    </li>
  </ul>
  <ul>
    <li
      v-for="(cocktailName, id, index) in cocktailObj"
      v-bind:key="'cocktailListWithIdx' + id"
      >
      {{ index + 1 }}: IDが{{ id }}のカクテルは{{ cocktailName }}
    </li>
  </ul>
</template>