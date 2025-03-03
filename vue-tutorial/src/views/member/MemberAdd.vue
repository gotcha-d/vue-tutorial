<script setup lang="ts">
import { inject, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useMemberStore } from '@/store/member';
import type { Member } from '@/interfaces';

const router = useRouter()
const memberStore = useMemberStore()
const member: Member = reactive({
  id: 0,
  name: "",
  email: "",
  points: 0,
  note: ""
})
const onAdd = (): void => {
  console.log(member)
  memberStore.addMember(member)
  router.push({name: "memberList"})
}
</script>

<template>
  <section>
    <h2>会員情報追加</h2>
    <p>情報を入力して登録ボタンをクリックしてください</p>
    <form action="#" @submit.prevent="onAdd">
      <dl>
        <dt>
          <label for="addId">ID&nbsp;</label>
        </dt>
        <dd>
          <input type="number" id="addId" v-model.number="member.id" required>
        </dd>
        <dt>
          <label for="addName">名前&nbsp;</label>
        </dt>
        <dd>
          <input type="text" id="addName" v-model="member.name" required>
        </dd>
        <dt>
          <label for="addEmail">メールアドレス&nbsp;</label>
        </dt>
        <dd>
          <input type="text" id="addEmail" v-model="member.email" required>
        </dd>
        <dt>
          <label for="addPoints">保有ポイント&nbsp;</label>
        </dt>
        <dd>
          <input type="number" id="addPoints" v-model.number="member.points" required>
        </dd>
        <dt>
          <label for="addNote">備考&nbsp;</label>
        </dt>
        <dd>
          <textarea type="text" id="addNote" v-model="member.note"></textarea>
        </dd>
      </dl>
      <button type="submit">登録</button>
    </form>
  </section>
</template>