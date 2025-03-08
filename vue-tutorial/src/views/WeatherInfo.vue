<script setup lang="ts">
import { useWeatherStore, type City } from '@/store/weather';
import { RouterLink } from 'vue-router';
import { computed } from 'vue';

interface Props {
  id: string
}
const props = defineProps<Props>()

const weatherStore = useWeatherStore()
weatherStore.reactiveWeatherInfo(props.id)

const isLoading = computed(
  (): boolean => {
    return weatherStore.isLoading
  }
)
const selectedCity = computed(
  (): City => {
    return weatherStore.selectedCity
  }
)
const weatherDescription = computed(
  (): string => {
    return weatherStore.weatherDescription
  }
)
</script>

<template>
  <p v-if="isLoading">データ取得中...</p>
  <section v-else>
    <h2>{{ selectedCity.name }}の天気</h2>
    <p>{{ weatherDescription }}</p>
  </section>
  <p>リストに
    <RouterLink :to="{name: 'CityList'}">
      戻る
    </RouterLink>
  </p>
</template>