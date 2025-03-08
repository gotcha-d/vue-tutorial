<script setup lang="ts">
import { computed } from "vue"
import type { City } from "@/store/weather";
import { useWeatherStore } from "@/store/weather";

const weatherStore = useWeatherStore()
weatherStore.prepareCityList()

const cityList = computed(
  (): Map<string, City> => {
    return weatherStore.cityList
  }
)
</script>

<template>
  <h2>都市リスト</h2>
  <ul>
    <li
      v-for="[id, city] in cityList"
      v-bind:key="id"
    >
      <RouterLink :to="{name: 'WeatherInfo', params: {id: id}}">
        {{ city.name }}の天気
      </RouterLink>
    </li>
  </ul>
</template>