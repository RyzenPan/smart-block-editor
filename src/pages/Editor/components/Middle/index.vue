<template>
	<div class="editorPanel">
		<ViewRender :pointData="componentArray" />
	</div>
</template>

<script lang="ts" setup>
import ViewRender from '../../../../core/renderer/ViewRender.vue'
import schemaMap from '@/materials/schema'
import { useStore } from 'vuex'
const store = useStore()
const { componentArray } = store.state
</script>

<style lang="less" scoped>
.editorPanel {
	position: relative;
	flex: auto;
	height: 100vh;
	padding-bottom: 100px;
	overflow-x: hidden;
	background-color: #f0f2f5;
}

::-webkit-scrollbar {
	display: none; /* Chrome Safari */
}
</style>
