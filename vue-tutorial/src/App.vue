<script setup lang="ts">
import { computed, ref } from 'vue'

const url = ref('https://vuejs.org/')
const isSendButtonDisabled = ref(true)
const widthOrHight = ref("height")
const widthOrHightValue = ref(100)
const imgAttributes = ref({
  src: "/images/logo.svg",
  alt: "vueのロゴ",
  width: 75,
  height: 100
})
const msg = ref('こんにちは、世界')
const msgTextRed = ref('red')
const msgTextColor = ref('white')
const msgBgColor = ref('black')
const msgStyles = ref({
  color: "white",
  backgroundColor: "black"
})
const msgStyles2 = ref({
  fontSize: "24pt"
})
const msgStyles3 = ref({
  color: "pink",
  fontSize: "24pt"
})
const textSize = computed(()=> {
  const size = Math.round(Math.random() * 10)
  return `${size}pt`
})
const isTextColorRed = ref(true)
const isBgColorBlue = ref(false)
const styles = {
  textColorRed: true,
  bgColorBlue: true
}
const computedStyles = computed(() => {
  const randomText = Math.round(Math.random())
  let textColorFlg = true
  if (randomText == 0) {
    textColorFlg = false
  }

  const randomBg = Math.round(Math.random())
  let bgColorFlg = true
  if (randomBg == 0) {
    bgColorFlg = false
  }

  return {
    textColorRed: textColorFlg,
    bgColorBlue: bgColorFlg
  }
})
</script>

<template>
  <!-- v-bindはマスタッシュ構文を使えないタグの属性部分に対してテンプレート変数を利用するための構文 -->
  <p>
    <a v-bind:href="url" target="_blank">Vue.jsのサイト</a>
  </p>
  <p>
    <a :href="url" target="_blank">Vue.jsのサイト(省略形)</a>
  </p>
  <p>
    <a v-bind:href="url + 'guide/introduction.html'" target="_blank">Vue.jsのガイドページ</a>
  </p>
  <p>
    <!-- 属性値がない属性の場合はboolean型を使用する -->
    <button v-bind:disabled="isSendButtonDisabled">送信</button>
  </p>
  <p>
    <!-- v-bindの引数にテンプレート変数を与えると、指定した属性に対して値をバインドできる -->
    <img src="./assets/logo.svg" alt="" v-bind:[widthOrHight]="widthOrHightValue">
  </p>
  <p>
    <!-- 複数の属性をまとめてバインドする方法 -->
    <img v-bind="imgAttributes">
    <img v-bind="imgAttributes" title="rogoです">
    <img v-bind="imgAttributes" height="100" width="100" title="rogoです">
  </p>

  <div style="border: 5px red solid">
    <p v-bind:style="{color: msgTextRed}">{{ msg }}</p>
    <p v-bind:style="{color: 'pink'}">{{ msg }}</p>
    <p v-bind:style="{fontSize: textSize}">{{ msg }}</p>
    <p v-bind:style="{color: msgTextColor, backgroundColor: msgBgColor}">
      {{ msg }}
    </p>
    <p v-bind:style="{color: msgTextColor, 'background-color': msgBgColor}">
      {{ msg }}
    </p>
    <p v-bind:style="msgStyles">
      {{ msg }}
    </p>
    <p v-bind:style="[msgStyles, msgStyles2]">
      {{ msg }}
    </p>
    <p v-bind:style="[msgStyles, msgStyles3]">
      {{ msg }}
    </p>
  </div>

  <div style="border: 5px green solid">
    <p v-bind:class="{textColorRed: true, bgColorBlue: true}">
      {{ msg }}
    </p>
    <p v-bind:class="{textColorRed: isTextColorRed, bgColorBlue: isBgColorBlue}">
      {{ msg }}
    </p>
    <!-- v-bind:styleのように自動でキャメルからケバブに変換されないのでこいつはピンクにならない -->
    <p v-bind:class="{textColorPink: true}">
      {{ msg }}
    </p>
    <p v-bind:class="{'text-color-pink': true}">
      {{ msg }}
    </p>
    <p class="textSize24" v-bind:class="{textColorRed: isTextColorRed, bgColorBlue: isBgColorBlue}">
      {{ msg }}
    </p>
    <p class="textSize24" v-bind:class="styles">
      {{ msg }}
    </p>
    <p class="textSize24" v-bind:class="computedStyles">
      {{ msg }}
    </p>
  </div>
</template>

<style>
.textColorRed {
  color: red;
}
.text-color-pink {
  color: pink;
}
.bgColorBlue {
  background-color: blue;
}
.textSize24 {
  font-size: 24px;
}
</style>