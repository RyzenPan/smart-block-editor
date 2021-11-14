<template>
	<div class="ImageRange">
		<img
			v-if="!imageLists.length"
			src="https://img.wenhairu.com/images/2021/11/14/1zVhU.jpg"
			alt=""
			draggable="false"
			:style="{ width: '100%' }"
		/>
		<img
			v-for="(img, index) in imageLists"
			:key="index"
			:src="img.url"
			alt=""
			draggable="false"
			:style="{ width: '100%' }"
		/>
	</div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const { renderItem } = defineProps({
	renderItem: Object,
})

const { imageLists } = renderItem?.data

console.log(renderItem, '图片组件收到的')
</script>

<style lang="less" scope>
.ImageRange {
	border-radius: 0;
	width: 100%;
	overflow: hidden;
	position: relative;
}
</style>
