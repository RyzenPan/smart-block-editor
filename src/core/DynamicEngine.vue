<template>
	<import-component :renderItem="renderItem"></import-component>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, defineProps } from 'vue'

const modules = import.meta.glob('../materials/base/*/index.vue')
const components: any = {}
Object.keys(modules).forEach(key => {
	const name = key.replace('../materials/base/', '').replace('/index.vue', '')
	console.log(name, 'name')
	components[name] = modules[key]
})

const { renderItem } = defineProps({
	renderItem: Object,
})

const importComponent = defineAsyncComponent(components[renderItem?.type])
</script>

<style></style>
