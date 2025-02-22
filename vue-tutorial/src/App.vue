<script setup lang="ts">
import { ref, computed } from "vue"

const cocktailListDataInit = new Map<number, Cocktail>()
cocktailListDataInit.set(1, {id: 1, name: "ホワイトレディ", price: 1200})
cocktailListDataInit.set(2, {id: 1, name: "ブルーハワイ", price: 1500})
cocktailListDataInit.set(3, {id: 3, name: "ニューヨーク", price: 1100})
cocktailListDataInit.set(4, {id: 4, name: "マティーニ", price: 1500})

const cocktailListNo = ref(1)
const priceMsg = computed((): string => {
  // 算出関数は便利だが、これはあくまで算出に使用する変数がスクリプトブロック内の変数だった時だけ
  // 算出関数で利用するデータがインターネットから取得した情報だった場合は非常に重い
  const cocktail = cocktailListDataInit.get(cocktailListNo.value)
  let msg = "該当のカクテルはありません"
  if (cocktail !== undefined) {
    msg = `該当のカクテルは${cocktail.name}で、価格は${cocktail.price}です`
  }
  return msg
})

interface Cocktail {
  id: number;
  name: string;
  price: number;
}

setInterval(() => {
  cocktailListNo.value = Math.round(Math.random() * 3) + 1
}, 1000)
</script>

<template>
  <p>現在のカクテル番号: {{ cocktailListNo }}</p>
  <p>{{ priceMsg }}</p>
</template>