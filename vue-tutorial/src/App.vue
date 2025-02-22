<script setup lang="ts">
import { ref, computed, watch } from "vue"

const cocktailListNo = ref(1)
const priceMsg = ref("")
watch(cocktailListNo, (): void => {
  priceMsg.value = getCocktailInfo(cocktailListNo.value)
})

interface Cocktail {
  id: number;
  name: string;
  price: number;
}

function getCocktailInfo(cocktailNo: number) {
  const cocktailListDataInit = new Map<number, Cocktail>()
  cocktailListDataInit.set(1, {id: 1, name: "ホワイトレディ", price: 1200})
  cocktailListDataInit.set(2, {id: 1, name: "ブルーハワイ", price: 1500})
  cocktailListDataInit.set(3, {id: 3, name: "ニューヨーク", price: 1100})
  cocktailListDataInit.set(4, {id: 4, name: "マティーニ", price: 1500})

  const cocktail = cocktailListDataInit.get(cocktailNo)
  let msg = "該当のカクテルはありません"
  if (cocktail !== undefined) {
    msg = `該当するカクテルは${cocktail.name}で、価格は${cocktail.price}円`
  }
  return msg
}
setInterval(() => {
  cocktailListNo.value = Math.round(Math.random() * 3) + 1
}, 1000)
</script>

<template>
  <p>現在のカクテル番号: {{ cocktailListNo }}</p>
  <p>{{ priceMsg }}</p>
</template>