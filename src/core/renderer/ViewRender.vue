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
			v-bind="{
				animation: 300,
				group: 'Droppable',
				disabled: false,
				ghostClass: 'ghost',
			}"
			@start="drag = true"
			@end="drag = false"
		>
			<template #item="{ element }">
				<div
					:class="`dragItem ${
						currentCompontent.id === element.id ? 'active' : ''
					}`"
					@click="handleSelectComp(element.id)"
				>
					<DynamicEngine :renderItem="element" />
				</div>
			</template>
		</draggable>
	</div>
</template>

<script lang="ts" setup>
import DynamicEngine from '@/core/DynamicEngine.vue'
import _ from 'lodash'
import { computed, ref, toRaw } from 'vue'
import { useStore } from 'vuex'
import draggable from '../../libs/vuedraggable/index'

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

// 从VueX中直接取出画板数据
const pointList = computed(() => store.state.componentArray)

// 更新画板数据
const handleChangeCanvas = () => {
	store.commit('setPointData', pointList.value)
}

// 当前选中的组件
const currentCompontent = computed(() => store.state.currentCompontent)

// 选中组件
const handleSelectComp = (id: string) => {
	store.commit('modCurrPointData', id)
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
.dragItem {
  position: relative;
	box-sizing: border-box;
	cursor: move;
	&.active::after {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 9;
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		// border: 3px dashed rgba(122,187,248,.7);
		border: 2px dashed rgb(60, 68, 249);
		box-shadow: 0 0 4px 4px rgb(122 187 248 / 20%);
		content: '';
		pointer-events: none;
	}
}
</style>
