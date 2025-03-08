import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils"
import App from "@/App.vue"

describe("App.vueのテスト", () => {
  test("初期表示値の表示内容のテスト", () => {
    const expected = "6÷3=2"
    // マウント状態にすることでコンポーネントはテストできる
    const wrapper = mount(App)
    
    const actual = wrapper.get("p").text()
    
    expect(actual).toBe(expected)
  })
})
