<template>
  <DynamicEngine :renderItem="renderItem" v-for="(renderItem) in pointList" :key="renderItem.id" />
</template>

<script lang="ts" setup>
import DynamicEngine from "@/core/DynamicEngine.vue";
import { computed, toRaw } from "vue";
import { useStore } from "vuex";

const store = useStore();

// 从VueX中直接取出画板数据
const pointList = computed(() => store.state.componentArray);
console.log(toRaw(pointList.value), "Components List");
</script>

<style>
</style>