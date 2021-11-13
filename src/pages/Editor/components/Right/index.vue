<template>
	<div>
		<div
			class="attrSetting"
			:style="{
				transition: 'all ease-in-out 0.5s',
				transform: rightColla ? 'translate(110%,0)' : 'translate(0,0)',
			}"
		>
			<div class="tit">属性面板</div>
		</div>
		<div
			:style="{
				width: rightColla ? 0 : '496px',
				transition: 'all ease-in-out 0.4s',
			}"
		></div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from '@vue/reactivity'

let rightColla = ref(true)
setTimeout(() => {
  rightColla.value = false
}, 300);

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
		.right {
			color: #767676;
			cursor: pointer;
		}
	}
}
.rightcolla {
	top: 50%;
	right: 496px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 20px;
	height: 80px;
	background: #fff;
	box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 0.1);
	cursor: pointer;
	&:hover {
		color: #2f54eb;
	}
}
</style>
