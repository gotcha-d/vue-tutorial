import { defineStore } from "pinia"

interface State {
  counter: number
}

/**
 * Storeの構成要素
 * 1. id
 * 2. state データの本体
 * 3. getters データの加工処理
 * 4. actions データの変更処理
 */
export const useCounterStore = defineStore(
  'counter', // テキストの書き方だと構文エラーとなった、
  {
    state: (): State => {
      return {
        counter: 0
      }
    },
    getters: {
      doubleCount: (state): number => {
        return state.counter * 2
      }
    },
    actions: {
      incrementCount(): void {
        this.counter++
      }
    }
  }
)