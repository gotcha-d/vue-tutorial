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

const cocktailDetailInit: Cocktail[] = [
  {id: 2345, name: "ホワイトレディ", price: 1200},
  {id: 4412, name: "ブルーハワイ", price: 1500},
  {id: 6792, name: "ニューヨーク", price: 1100},
  {id: 8429, name: "マティーニ", price: 1500},
]
const cocktailDetail = ref(cocktailDetailInit)
interface Cocktail {
  id: number;
  name: string;
  price: number;
}

const cocktailMapObjInit = new Map<number, Cocktail>()
cocktailMapObjInit.set(2345, {id: 2345, name: "ホワイトレディ", price: 1200})
cocktailMapObjInit.set(4412, {id: 4412, name: "ブルーハワイ", price: 1500})
cocktailMapObjInit.set(6792, {id: 6792, name: "ニューヨーク", price: 1100})
cocktailMapObjInit.set(8429, {id: 8429, name: "マティーニ", price: 1500})
const cocktailMapObj = ref(cocktailMapObjInit)
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
  <hr>
  <ul>
    <li
      v-for="(cocktailName, index) in cocktailList"
      >
      {{ cocktailName }} (インデックス{{ index }})
    </li>
  </ul>
  <hr>
  <ul>
    <li
      v-for="(cocktailName, id) in cocktailDic"
      v-bind:key="'cocktailList' + id"
      >
      IDが{{ id }}のカクテルは{{ cocktailName }}
    </li>
  </ul>
  <hr>
  <ul>
    <li
      v-for="(cocktailName, id, index) in cocktailDic"
      v-bind:key="'cocktailListWithIdx' + id"
      >
      {{ index + 1 }}: IDが{{ id }}のカクテルは{{ cocktailName }}
    </li>
  </ul>
  <hr>
  <ul>
    <li
      v-for="[id, cocktailName] in cocktailMap"
      v-bind:key="id"
      >
      <!-- Mapのループは[]ブラケットで囲う -->
      IDが{{ id }}のカクテルは{{ cocktailName }}
    </li>
  </ul>
  <hr>
  <dl>
    <template
      v-for="(value, key) in whiteLady"
      v-bind:key="key"
      >
      <dt>{{ key }}</dt><dd>{{ value }}</dd>
    </template>
  </dl>
  <hr>
  <ul>
    <li
      v-for="cocktailItem in cocktailDetail"
      v-bind:key="cocktailItem.id"
      >
      <dl>
        <template
          v-for="(value, key) in cocktailItem"
          v-bind:key="key"
          >
          <dt>{{ key }}</dt>
          <dd>{{ value }}</dd>
        </template>
      </dl>
    </li>
  </ul>
  <ul>
    <li
      v-for="[id, cocktailItem ] in cocktailMapObj"
      v-bind:key="id"
    >
      {{ cocktailItem.name }}の値段は{{ cocktailItem.price }}
    </li>
  </ul>
  <ul>
    <!-- カウンタ変数 を使った場合の開始値は1固定 -->
    <li
      v-for="r in 5"
      v-bind:key="r"
      >
      半径{{ r }}の円の円周は{{ 2* r * 3.14 }}
    </li>
  </ul>
</template>