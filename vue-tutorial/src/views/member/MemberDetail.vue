<script setup lang="ts">
import { inject } from 'vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <h1>会員管理</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>
        <RouterLink v-bind:to="{name: 'AppTop'}">
          TOP
        </RouterLink>
      </li>
      <li>
        <RouterLink v-bind:to="{name: 'memberList'}">
          会員リスト
        </RouterLink>
      </li>
      <li>
        会員詳細
      </li>
    </ul>
  </nav>
  <section>
    <h2>会員詳細情報</h2>
  </section>
</template>