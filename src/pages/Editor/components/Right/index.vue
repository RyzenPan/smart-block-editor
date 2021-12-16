<template>
	<div>
		<div
			class="attrSetting"
			:style="{
				transition: 'all ease-in-out 0.5s',
				transform: !currentCompontent.id
					? 'translate(110%,0)'
					: 'translate(0,0)',
			}"
		>
			<div class="tit">
				<div class="left">属性面板</div>
				<div class="right" @click="handleClosePanel">
					<CloseOutlined />
				</div>
			</div>
			<div class="config-content">
				<FormRender
					:formCfg="formCfg"
					:formData="formData"
					@onChange="handleChangeForm"
				/>
			</div>
		</div>
		<div
			:style="{
				width: !currentCompontent.id ? 0 : '496px',
				transition: 'all ease-in-out 0.4s',
			}"
		></div>
		<SettingDrawer />
	</div>
</template>

<script lang="ts" setup>
import _ from 'lodash'
import { computed, ref, watchEffect } from 'vue'
import { useStore } from 'vuex'
// 导入图标库
import { CloseOutlined } from '@ant-design/icons-vue'
import FormRender from '@/core/renderer/FormRender.vue'
import { BasicSchema } from '../../../../materials/base/schema'
import SettingDrawer from './components/SettingDrawer.vue'
const store = useStore()

const handleClosePanel = () => {
	store.commit('clearCurrPointData')
}
// 当前选中的组件
const currentCompontent: any = computed(() => store.state.currentCompontent)

const formCfg = ref([])
const formData = ref({})

watchEffect(() => {
	const { id, type, data } = currentCompontent.value
	if (id) {
		formCfg.value = BasicSchema[type].editData
		formData.value = data
	}
})

const handleChangeForm = (value: any) => {
	store.commit("updateCurrPointData", value);
}
</script>

<style lang="less" scoped>
.attrSetting {
	position: fixed;
	right: 0;
	width: 480px;
	height: calc(100vh - 72px);
	margin: 8px;
	padding: 20px;
	overflow: auto;
	background: #fff;
	border-radius: 10px;
	box-shadow: 0 0 6px rgba(152, 153, 161, 0.3);
	.tit {
		display: flex;
		justify-content: space-between;
		margin-bottom: 16px;
		color: #000;
		font-weight: bold;
		.left {
			user-select: none;
		}
		.right {
			color: #767676;
			cursor: pointer;
		}
	}
}
</style>
