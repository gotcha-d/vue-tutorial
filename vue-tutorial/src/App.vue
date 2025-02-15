<script setup lang="ts">
import { ref } from "vue"

const inputTextArea = ref("テキストエリアへの入力\n改行も入れてみる")
const memberType = ref(1)
const memberTypeSelect = ref(1)
const isAgreed = ref(false)
const isAgreed01 = ref(0)
const selectedOS = ref([])

const processType = ref(1)
</script>

<template>
  <textarea name="" v-model="inputTextArea"></textarea>
  <hr>
  <label><input type="radio" value="1" v-model="memberType">通常会員</label>
  <label><input type="radio" value="2" v-model="memberType">特別会員</label>
  <label><input type="radio" value="3" v-model="memberType">優待会員</label>
  <p>選択されたラジオボタン: {{ memberType }}</p>
  <hr>
  <select name="" v-model="memberTypeSelect">
    <option value="1">通常会員</option>
    <option value="2">特別会員</option>
    <option value="3">優待会員</option>
  </select>
  <p>選択されたリスト：{{ memberTypeSelect }}</p>
  <hr>
  <label for="agree">同意する</label><input id="agree" type="checkbox" v-model="isAgreed">
  <p>同意の結果: {{ isAgreed }}</p>
  <hr>
  <label for="agree">同意する</label><input id="agree" type="checkbox" v-model="isAgreed01" true-value="1" false-value="0">
  <p>同意の結果: {{ isAgreed01 }}</p>
  <hr>
  <label><input type="checkbox" v-model="selectedOS" value="1">MacOS</label>
  <label><input type="checkbox" v-model="selectedOS" value="2">Windows</label>
  <label><input type="checkbox" v-model="selectedOS" value="3">Linux</label>
  <label><input type="checkbox" v-model="selectedOS" value="4">iOS</label>
  <label><input type="checkbox" v-model="selectedOS" value="5">Android</label>
  <p>選択されたOS: {{ selectedOS }}</p>
  <hr>
  <label for=""><input type="radio" value="1" v-model="processType">新規</label>
  <label for=""><input type="radio" value="2" v-model="processType">更新</label>
  <label for=""><input type="radio" value="3" v-model="processType">削除</label>
  <p>選択された種別{{ processType }}</p>
</template>