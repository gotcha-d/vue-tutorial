<script setup lang="ts">
import type { RefSymbol } from "@vue/reactivity";
import { ref, computed } from "vue"

const cocktailDetailListInit: Cocktail[] = [
  {id: 2345, name: "ホワイトレディ" , price: 1200},
  {id: 4412, name: "ブルーハワイ" , price: 1500},
  {id: 6792, name: "ニューヨーク" , price: 1100},
  {id: 8429, name: "マティーニ" , price: 1500},
]
const cocktailDetailList = ref(cocktailDetailListInit)
interface Cocktail {
  id: number;
  name: string;
  price: number;
}
const cocktail1500 = computed((): Cocktail[] => {
  return cocktailDetailList.value.filter((item) => item.price >= 1500)
})

const cocktailListInit: string[] = ["ホワイトレディ", "ブルーハワイ", "ニューヨーク"]
const cocktailList = ref(cocktailListInit)
const changeCocktailList = (): void => {
  cocktailList.value = ["バラライカ", "XYZ", "マンハッタン"]
}
const addCocktailList = (): void => {
  cocktailList.value.push("ブールームーン")
}
const popCocktailList = (): void => {
  cocktailList.value.pop()
}
</script>

<template>
  <section>
    全てのカクテルリスト
    <ul>
      <li
        v-for="(cocktailItem, index) in cocktailDetailList"
        v-bind:key="cocktailItem.id"
        >
        ID: {{ cocktailItem.id }}のカクテルは{{ cocktailItem.name }}({{ cocktailItem.price }}円)
      </li>
    </ul>
  </section>
  <section>
    値段が1500円のリスト
    <ul>
      <li
        v-for="(cocktailItem, index) in cocktail1500"
        v-bind:key="cocktailItem.id"
        >
        ID: {{ cocktailItem.id }}のカクテルは{{ cocktailItem.name }}({{ cocktailItem.price }}円)
      </li>
    </ul>
  </section>
  <hr>
  <section>
    <ul>
      <li
        v-for="(cocktailName, index) in cocktailList"
        :key="cocktailName"
        >
        {{ index  +  1 }}のカクテルは{{ cocktailName }}
      </li>
    </ul>
    <button v-on:click="changeCocktailList">カクテル変更</button>
    <button v-on:click="addCocktailList">カクテル追加</button>
    <button v-on:click="popCocktailList">カクテル削除</button>
  </section>
</template>