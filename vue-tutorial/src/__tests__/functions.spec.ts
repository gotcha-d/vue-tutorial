import { describe, test, expect } from "vitest"
import { divideTwoNums } from "@/functions"

describe("functions.ts.のdivideTwoNum()関数のテスト", () => {
    test("単純な割り算のテスト", () => {
        const num1 = 6
        const num2 = 3
        const actual = divideTwoNums(num1, num2)
        const expected = 2
        expect(actual).toBe(expected)
      }
    )
  }
)