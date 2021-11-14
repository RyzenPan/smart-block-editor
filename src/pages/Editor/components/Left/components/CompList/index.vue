<template>
	<div class="compContain">
		<div class="panelTitle">组件列表</div>
		<div class="penelBox">
			<div
				:className="`module ${(index + 1) % 3 === 0 ? 'mr0' : ''}`"
				v-for="(item, index) in basicTemplate"
				:key="index"
				@click="addPoint(item)"
			>
				<div
					:style="{
						height: '50px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						overflow: 'hidden',
						fontSize: '30px',
					}"
				>
					<PictureOutlined />
				</div>
				<div
					:style="{
						height: '30px',
						lineHeight: '30px',
						textAlign: 'center',
						color: 'rgba(118, 118, 118, 1)',
					}"
				>
					{{ item.displayName }}
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import schemaMap from '@/materials/schema'
import basicTemplate from '@/materials/base/template'
import { PictureOutlined } from '@ant-design/icons-vue'
import _ from 'lodash'
import { uuid } from '@/utlis'
import { useStore } from 'vuex'
const store = useStore()

const addPoint = item => {
	const commonConfig = _.cloneDeep(schemaMap[item.type]?.config)
	commonConfig.id = uuid(6, 10)
	store.commit('addPointData', commonConfig)
}
</script>

<style lang="less" scoped>
.compContain {
	margin-bottom: 8px;
	overflow: hidden;
	border-radius: 10px;
	box-shadow: 0 0 6px rgba(152, 153, 161, 0.3);
	.panelTitle {
		width: 100%;
		height: 40px;
		padding-left: 25px;
		color: #33383e;
		font-weight: 700;
		font-size: 14px;
		line-height: 40px;
		text-align: left;
		background-color: #fff;
		-moz-user-select: none;
		-webkit-user-select: none;
		user-select: none;
	}
	.penelBox {
		height: 38.4vh;
		padding: 10px 16px;
		overflow-x: hidden;
		overflow-y: scroll;
		background-color: #fff;
		&::-webkit-scrollbar {
			display: none;
		}
	}
}
.module {
	position: relative;
	box-sizing: border-box;
	width: 82px;
	margin-right: 28px;
	margin-bottom: 10px;
	overflow: hidden;
	background-color: #f6f7f9;
	border-radius: 8px;
	box-shadow: 0 0 6px rgba(152, 153, 161, 0.2);
	user-select: none;
	&:hover {
		background-color: #e9ebed;
	}
	&::after {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 99;
		width: 100%;
		height: 100%;
		content: '';
	}
}
.mr0 {
	margin-right: 0;
}
</style>
