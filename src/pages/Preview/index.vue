<template>
  <div>
    <DynamicEngine :renderItem="renderItem" v-for="(renderItem) in pointList" :key="renderItem.id" />
  </div>
</template>

<script lang="ts" setup>
import DynamicEngine from "@/core/DynamicEngine.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

// 从VueX中直接取出画板数据
const pointList = computed(() => store.state.componentArray);
</script>

<style>
</style>