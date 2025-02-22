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

const cocktailMapInit = new Map<number, string>()
cocktailMapInit.set(1111, "ホワイトレディ")
cocktailMapInit.set(2222, "ブルーハワイ")
cocktailMapInit.set(3333, "ニューヨーク")
cocktailMapInit.set(4444, "マティーニ")
const cocktailMap = ref(cocktailMapInit)

const changeCocktailMap = () : void => {
  cocktailMap.value.clear()
  cocktailMap.value.set(5555, "バラライカ")
  cocktailMap.value.set(6666, "XYZ")
  cocktailMap.value.set(7777, "マンハッタン")
}
const addCocktailMap = (): void => {
  cocktailMap.value.set(9999, "ブルームーン")
}
const removeCocktailMap = (): void => {
  cocktailMap.value.delete(4444)
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
  <hr>
  <section>
    <ul>
      <li
        v-for="[key, cocktailName] in cocktailMap"
        v-bind:key="key"
        >
        {{ key }}のカクテル{{ cocktailName }}
      </li>
    </ul>
    <button v-on:click="changeCocktailMap">カクテル変更</button>
    <button v-on:click="addCocktailMap">カクテル追加</button>
    <button v-on:click="removeCocktailMap">4444のカクテル削除</button>
  </section>
</template>