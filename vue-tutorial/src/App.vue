<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      cocktailNo: 1,
      priceMsg: ""
    }
  },
  watch: {
    cocktailNo(newVal: number, oldVal: number) {
      const cocktailDetailList = new Map<number, Cocktail>()
      cocktailDetailList.set(1, {id: 1, name: "ホワイトレディ", price: 1200})
      cocktailDetailList.set(2, {id: 2, name: "ブルーハワイ", price: 1200})
      cocktailDetailList.set(3, {id: 3, name: "ニューヨーク", price: 1200})
      cocktailDetailList.set(4, {id: 4, name: "マティーニ", price: 1200})

      const cocktail = cocktailDetailList.get(this.cocktailNo)
      let msg = "該当のカクテルはありません"
      if (cocktail !== undefined) {
        msg = `該当のカクテルは${cocktail.name}で価格は${cocktail.price}円`
      }
      this.priceMsg = msg
    }
  },
  created(): void {
    () => {
      setInterval(
        (): void => {
          console.log(this)
          // this.cocktailNo = Math.round(Math.random() * 3) + 1
        }, 1000
      )
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
  <p>現在のカクテル番号: {{ cocktailNo }}</p>
  <p>{{ priceMsg }}</p>
</template>