<template>
	<div class="canvas">
		<draggable
			class="list-group"
			tag="transition-group"
			:component-data="{
				tag: 'ul',
				type: 'transition-group',
				name: !drag ? 'flip-list' : null,
			}"
			v-model="pointList"
			v-bind="dragOptions"
			@start="drag = true"
			@end="handleEnd"
			item-key="id"
		>
			<template #item="{ element }">
				<DynamicEngine :renderItem="element" />
			</template>
		</draggable>
	</div>
</template>

<script lang="ts" setup>
import basicTemplate from '@/materials/base/template'
import DynamicEngine from '@/core/DynamicEngine.vue'
import _ from 'lodash'
import { computed, defineProps, reactive, ref, watch } from 'vue'
import { uuid } from '../../../../utlis'
import { useStore } from 'vuex'
import { TNewData } from '../../../../store/typing'
import draggable from 'vuedraggable'
const store = useStore()

let drag = ref(false)

const { pointData } = defineProps({
	pointData: Array,
})

const pointList = ref(pointData)

watch(
	() => pointData,
	(newValue, oldValue) => {
		console.log(newValue)
	}
)

const handleEnd = () => {
	console.log(pointList, 'pointList')
	store.commit('setPointData', pointList)
	drag.value = false
}

const handleDragOver = (event: DragEvent) => {
	event.preventDefault()
	event.dataTransfer!.dropEffect = 'copy'
}

const dragOptions = computed(() => {
	return {
		animation: 300,
		group: 'description',
		disabled: false,
		ghostClass: 'ghost',
	}
})

const handleDrop = (event: DragEvent) => {
	console.log('over')
	event.preventDefault()
	const target = event.target as Element
	if (target?.classList.contains('canvas')) {
		const index = event.dataTransfer?.getData('index')
		if (index) {
			console.log(index, 'index')
			const item = basicTemplate[index]
			store.commit('addPointData', item)
		}
	} else {
		const index = event.dataTransfer?.getData('index')
		const targetCompId = target.parentElement?.dataset.id
		const item = basicTemplate[index]
		const targetIndex = pointData?.findIndex(
			(compItem: any) => compItem.id === targetCompId
		)
		store.commit('addPointDataForIndex', { item, index: targetIndex })
	}
}

let startInfo: any | null = null
const handleMousedown = (event: MouseEvent) => {
	// console.log('event', event.target);
	event.preventDefault()
	startInfo = {
		x: event.clientX,
		y: event.clientY,
		// left: root.value!.offsetLeft, // left和top第一次等于props.info.position
		// top: root.value!.offsetTop,
	}
	console.log(startInfo, 'startInfo')
	// root.value!.style.zIndex = '2'
	// emitter.emit<string>('press', props.info.id)
	// setActive()
	// toggleMoving(true)
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
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
