<template>
	<div class="canvas">
		<draggable
			class="droppablePanel"
			:list="pointList"
			@change="handleChangeCanvas"
			tag="transition-group"
			item-key="id"
			:component-data="{
				tag: 'div',
				type: 'transition-group',
				name: !drag ? 'flip-list' : null,
			}"
			v-bind="dragOptions"
			@start="drag = true"
			@end="drag = false"
		>
			<template #item="{ element }">
				<DynamicEngine :renderItem="element" />
			</template>
		</draggable>
	</div>
</template>

<script lang="ts" setup>
import DynamicEngine from '@/core/DynamicEngine.vue'
import _ from 'lodash'
import { computed, defineProps, ref } from 'vue'
import { useStore } from 'vuex'
import draggable from 'vuedraggable'
const store = useStore()
// 拖拽插件配置
let drag = ref(false)
const dragOptions = computed(() => {
	return {
		animation: 300,
		group: 'Droppable',
		disabled: false,
		ghostClass: 'ghost',
	}
})

const { pointData = [] } = defineProps({
	pointData: Array,
})
// 提供给插件同步数据的列表
const pointList = ref(pointData)

const handleChangeCanvas = (e: any) => {
	console.log(e, 'handleChangeCanvas')
	store.commit('setPointData', pointList.value)
}
</script>

<style lang="less" scoped>
.canvas {
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
.sortable-ghost {
	opacity: 0.5;
	background: #c8ebfb;
}
.ghost {
	opacity: 0.5;
	background: #c8ebfb;
}
</style>
