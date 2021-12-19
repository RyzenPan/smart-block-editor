<template>
  <div>
    <Loading v-if="loaded" />
    <Container v-else />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Container from "./Container.vue";
const loaded = ref(true);
setTimeout(() => {
  loaded.value = false;
}, 400);
</script>

<style></style>
