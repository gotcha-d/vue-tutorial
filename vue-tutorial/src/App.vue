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

const cocktailMapObjInit = new Map<number, Cocktail>()
cocktailMapObjInit.set(1111, {id: 1111, name: "ホワイトレディ", price: 1200})
cocktailMapObjInit.set(2222, {id: 2222, name: "ブルーハワイ", price: 1500})
cocktailMapObjInit.set(3333, {id: 3333, name: "ニューヨーク", price: 1100})
cocktailMapObjInit.set(4444, {id: 4444, name: "マティーニ", price: 1500})
const cocktailMapObj = ref(cocktailMapObjInit)
const whiteLadyModel = cocktailMapObj.value.get(1111) as Cocktail 

const cocktailMapObj1500 = computed((): Map<number, Cocktail> => {
  const newMap = new Map<number, Cocktail>()
  // Mapのforeachは、第一引数に各要素、第二引数にキーが入っている
  cocktailMapObj.value.forEach((item, key): void => {
    if (item.price == 1500) {
      newMap.set(item.id, item)
    }
  })
  return newMap
})
const changePrice = (): void => {
  // この書き方はエラー
  // cocktailMapObj.value.get(1111)?.price = 1500
  const whiteLady = cocktailMapObj.value.get(1111) as Cocktail
  whiteLady.price = 1500 
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
  <hr>
  <section>
    全てのカクテル
    <ul>
      <li
        v-for="[key, cocktailItem] in cocktailMapObj"
        v-bind:key="key"
        >
        {{ key }}: {{ cocktailItem.name }}({{ cocktailItem.price }}円)
      </li>
    </ul>
  </section>
  <section>
    1500円のカクテル
    <ul>
      <li
        v-for="[key, cocktailItem] in cocktailMapObj1500"
        v-bind:key="key"
        >
        {{ key }}: {{ cocktailItem.name }}({{ cocktailItem.price }}円)
      </li>
    </ul>
  </section>
  <button v-on:click="changePrice">ホワイトレディの価格を変更する。</button>
  <form v-on:submit.prevent="changePriceInput">
    <input id="white-lady-text" type="text" v-bind:value="whiteLadyModel.price" required>
    <button type="submit" >ホワイトレディの価格を変更する</button>
  </form>
</template>