import { defineStore } from "pinia"

export interface City {
  name: string
  q: string
}

interface State {
  cityList: Map<string, City>
  selectedCity: City
  isLoading: boolean
  weatherDescription: string
}

export const useWeatherStore = defineStore(
  "weather",
  {
    state : (): State => {
      return {
        cityList: new Map<string, City>(),
        selectedCity: {name: "", q: ""},
        isLoading: true,
        weatherDescription: ""
      }
    },
    getters: {

    },
    actions: {
      prepareCityList() {
        this.cityList.set("Osaka", {name: "大阪", q: "Osaka"})
        this.cityList.set("Kobe", {name: "神戸", q: "Kobe"})
        this.cityList.set("Himeji", {name: "姫路", q: "Himeji"})
      },
      async reactiveWeatherInfo(id: string) {
        this.selectedCity = this.cityList.get(id) as City
        const weatherInfoUrl = "https://api.openweathermap.org/data/2.5/weather"
        const params: {
          lang: string,
          q: string,
          appId: string
        } = {
          lang: "ja",
          q: id,
          appId: "bdda1add900b71887bdcfca36c2fa81b"
        }
        const queryParams = new URLSearchParams(params)
        const urlFull = `${weatherInfoUrl}?${queryParams}`
        const response = await fetch(urlFull)
        // 天気情報APIから返却された天気データのJSONをステートに格納
        const weatherInfoJson = await response.json()
        console.log(weatherInfoJson)
        const weatherArray = weatherInfoJson.weather
        console.log(weatherArray)
        const weather = weatherArray[0]
        this.weatherDescription = weather.description
        this.isLoading = false
      }
    }
  }

)