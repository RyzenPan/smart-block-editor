<template>
  <div>
    <GridRender :pointData="pointData"/>
  </div>
</template>

<script lang="ts" setup>
import GridRender from './components/GridRender/index.vue'
import { defineProps } from 'vue'

const { pointData } = defineProps({
  pointData: Array
})
</script>

<style>

</style>