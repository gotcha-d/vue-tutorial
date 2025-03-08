import { defineStore } from "pinia";
import type { Member } from "@/interfaces";
import MemberAdd from "@/views/member/MemberAdd.vue";

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
      getById: (state) => {
        // 引数付きのゲッタ
        return (id: number) => {
          const member = state.memberList.get(id) as Member
          return member
        }
      },
      isMemberListEmpty: (state) => {
        return (): boolean => {
          return state.memberList.size == 0
        }
      }
    },
    actions: {
      prepareMemberList(): void {
        let memberList: Map<number, Member> = new Map<number, Member>()
        const memberListJsonStr = sessionStorage.getItem("memberItem")
        if (memberListJsonStr !== undefined && memberListJsonStr !== null) {
          const memberListJson = JSON.parse(memberListJsonStr)
          memberList = new Map<number, Member>(memberListJson)
        }
        this.memberList = memberList
      },
      insertMember(member: Member): void {
        this.memberList.set(member.id, member)
        const memberListJsonStr = JSON.stringify([...this.memberList])
        sessionStorage.setItem("memberList", memberListJsonStr)
      }
    }
  }

)

