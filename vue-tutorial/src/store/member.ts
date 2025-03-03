import { defineStore } from "pinia";
import type { Member } from "@/interfaces";

interface State {
  memberList: Member[]
}

export const useMemberStore = defineStore(
  "memberList",
  {
    state: () => {
      return {
        memberList: new Map<number, Member>()
      }
    },
    getters: {
    },
    actions: {
      initList(): void {
        this.memberList.set(33456, {id: 33456, name: "田中太郎", email: "tanaka@example.com", points: 35, note: "初回入会特典あり"})
        this.memberList.set(47783, {id: 47783, name: "鈴木次郎", email: "mue@exmaple.jp", points:53})
      }
    }
  }

)

