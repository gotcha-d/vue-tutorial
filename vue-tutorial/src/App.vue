<script lang="ts">
import { defineComponent, ref, computed, reactive, toRefs } from "vue"

// OpetionsAPI3.2より前の書き方
export default defineComponent({
  name: "App", // コンポーネント名
  data() {
    // これまでテンプレート変数として定義した値を用意。OpetionsAPIではデータプロパティという
    return {
      width: Math.round(Math.random() * 10),
      height: Math.round(Math.random() * 10)
    }
  },
  computed: {
    // 算出プロパティを定義
    area(): number {
      return this.width * this.height
    }
  },
  methods: {
    // メソッド
    change(): void {
      this.width = Math.round(Math.random() * 10),
      this.height = Math.round(Math.random() * 10)
    }
  }
})
</script>

<template>
  <p>縦が{{ height }}、横が{{ width }}の長方形の面積は{{ area }}</p>
  <button @click="change">値を変更</button>
</template>