<template>
	<div>ImageRange</div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const { renderItem } = defineProps({
  renderItem: Object
})

console.log(renderItem, '图片组件收到的')
</script>

<style></style>
