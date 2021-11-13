<template>
	<div class="header">
		<div class="logoArea">
			<div class="backBtn">
				<ArrowLeftOutlined />
			</div>
		</div>
		<div class="controlArea">
			<SaveOrPubilcBtn />
		</div>
	</div>
</template>

<script lang="ts" setup>
import SaveOrPubilcBtn from './components/SaveOrPubilcBtn/index.vue'
import { ArrowLeftOutlined } from '@ant-design/icons-vue'
</script>

<style lang="less" scoped>
.header {
	position: fixed;
	z-index: 201;
	display: flex;
	align-items: center;
	width: 100%;
	height: 56px;
	padding-right: 30px;
	padding-left: 30px;
	background: #fff;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	.logoArea {
		position: relative;
		display: flex;
		align-items: center;
		height: 56px;
		margin-right: 20px;
		.backBtn {
			display: inline-block;
			margin-right: 18px;
			padding: 12px 6px;
			cursor: pointer;
		}
		.logo {
			width: 100%;
			img {
				width: 40px;
			}
		}
		p {
			position: absolute;
			color: #888;
			font-size: 12px;
			transform: scale(0.9) translate(88px, -15px);
		}
	}
	.controlArea {
		flex: 1;
		text-align: right;
		.controlBtn {
			margin-right: 8px;
			color: #33383e;
			font-weight: 700;
			font-size: 14px;
		}
	}
}
.saveForm {
	.formIpt {
		margin-bottom: 20px;
	}
}
@media screen and (min-width: 1280px) {
	.header {
		.logoArea {
			width: 40px;
		}
		.controlArea {
			width: auto;
		}
	}
}
</style>
