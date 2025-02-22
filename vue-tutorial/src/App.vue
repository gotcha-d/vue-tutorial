<script lang="ts">
import { defineComponent, ref, computed } from "vue"

// Vueバージョン3.2より前の書き方。defineComponentによってコンポーネントの処理内容を記載する
export default defineComponent({
  name: "App", // コンポーネント名
  setup() {
    // compositionAPIでscriptブロックに書いていた内容
    const cocktailDetailListInit = new Map<number, Cocktail>()
    cocktailDetailListInit.set(1, {id: 1, name: "ホワイトレディ", price: 1200})
    cocktailDetailListInit.set(2, {id: 2, name: "ブルーハワイ", price: 1500})
    cocktailDetailListInit.set(3, {id: 3, name: "ニューヨーク", price: 1100})
    cocktailDetailListInit.set(4, {id: 4, name: "マティーニ", price: 1500})

    const cocktailNo = ref(1)
    const priceMsg = computed((): string => {
      const cocktail = cocktailDetailListInit.get(cocktailNo.value)
      let msg = "該当のカクテルはありません"
      if (cocktail !== undefined) {
        msg = `該当のカクテルは${cocktail.name}で、価格は${cocktail.price}円`
      }
      return msg
    })

    setInterval(() => {
      cocktailNo.value = Math.round(Math.random() * 3) + 1
    }, 1000)
  
    // 戻り値としてリアクティブ変数をリターンして、templateブロックで利用できるようになる
    return {
      cocktailNo,
      priceMsg
    }

  }
})

interface Cocktail {
  id: number;
  name: string;
  price: number;
}
</script>

<template>
  <p>現在のカクテル番号： {{ cocktailNo }}</p>
  <p>{{ priceMsg }}</p>
</template>