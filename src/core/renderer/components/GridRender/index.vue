<template>
	<div class="droppable">
		<DynamicEngine
			v-for="item in pointData"
			:key="item.id"
			:renderItem="item"
		/>
	</div>
</template>

<script lang="ts" setup>
import DynamicEngine from '@/core/DynamicEngine.vue'
import { defineProps } from 'vue'

const { pointData } = defineProps({
	pointData: Array,
})
</script>

<style lang="less" scoped>
.droppable {
	position: relative;
	z-index: 2;
	width: 375px;
	min-height: 665px;
	margin: 150px auto 50px;
	overflow: visible;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 0 6px rgba(152, 153, 161, 0.3);
}

.droppablePanel {
	width: 100%;
	min-height: 665px;
}
:global(.react-draggable-dragging) {
	z-index: 99;
}
</style>
