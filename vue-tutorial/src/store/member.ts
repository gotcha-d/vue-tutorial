import { defineStore } from "pinia";
import type { Member } from "@/interfaces";
import MemberAdd from "@/views/member/MemberAdd.vue";

interface State {
  memberList: Member[]
  isLoading: boolean
}

export const useMemberStore = defineStore(
  "memberList",
  {
    state: () => {
      return {
        memberList: new Map<number, Member>(),
        isLoading: true
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
      async prepareMemberList(): Promise<boolean> {
        const database = await getDatabase()
        console.log(database)
        const promise = new Promise<boolean>(
          (resolve, reject) => {
            // トランザクションオブジェクト取得
            const transaction = database.transaction("members", "readonly")
            // オブジェクトストア取得
            const objectStore = transaction.objectStore("members")

            // 
            const memberList = new Map<number, Member>()
            const request = objectStore.openCursor()

            request.onsuccess = (event) => {
              // データ取得成功時処理
              const target = event.target as IDBRequest
              const cursor = target.result as IDBCursorWithValue
              if (cursor) {
                const id = cursor.key as number
                const member = cursor.value as Member
                memberList.set(id, member)
                cursor.continue()
              }
            }
            transaction.oncomplete = () => {
              // トランザクション成功時処理
              this.memberList = memberList
              this.isLoading = false
              resolve(true)
            }
            transaction.onerror = (event) => {
              // データ取得失敗時処理
              console.log(event)
              reject(new Error("データ取得処理に失敗。"))
            }
          }
        )
        return promise
      },
      insertMember(member: Member): void {
        this.memberList.set(member.id, member)
        const memberListJsonStr = JSON.stringify([...this.memberList])
        sessionStorage.setItem("memberList", memberListJsonStr)
      }
    }
  }
)

let _database: IDBDatabase;

async function getDatabase(): Promise<IDBDatabase> {
  // Promiseオブジェクトをnewする際には、非同期で行いたい処理をコールバックで渡す
  const promise = new Promise<IDBDatabase>(
    (resolve, reject) => {
      if (_database != undefined) {
        resolve(_database)
      } else {
        // DBオープン
        const request = window.indexedDB.open("asyncDB", 1)
        request.onupgradeneeded = (event) => {
          // オブジェクトストア作成
          const target = event.target as IDBRequest
          const database = target.result as IDBDatabase
          database.createObjectStore("members", {keyPath: "id"})
        }
        request.onsuccess = (event) => {
          // DBオープン成功時
          const target = event.target as IDBRequest
          _database = target.result as IDBDatabase
          resolve(_database)
        }
        request.onerror = (event) => {
          // DBオープン失敗時
          console.log("ERROR: DBをオープンできません", event)
          reject(new Error("ERROR: DBをオープンできません"))
        }
      }

    }
  )
  return promise
}

