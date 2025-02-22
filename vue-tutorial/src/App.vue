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
</template>