<template>
	<div class="btn-group">
		<a-button type="primary" class="btn-group-item" @click="deleteAll"
			>清空</a-button
		>
		<a-button type="primary" class="btn-group-item">预览</a-button>
		<a-button type="primary" class="btn-group-item">保存</a-button>
		<a-button type="primary" class="btn-group-item">发布</a-button>
    <a-modal />
	</div>
</template>

<script lang="ts" setup>
import { Modal } from 'ant-design-vue';
import { useStore } from 'vuex'
const store = useStore()

const deleteAll = () => {
	Modal.confirm({
		title: '确认清空画布?',
		onOk() {
      console.log('确认清空画布')
      store.commit('clearPointData')
		},
	})
}
</script>

<style lang="less" scoped>
.btn-group {
	.btn-group-item {
		margin-right: 10px;
	}
}
</style>
