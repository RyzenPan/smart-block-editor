import template from './template'
import { uuid } from '../../../utlis/index'

const Coupon = {
	config: {
		...template,
		id: uuid(6, 10),
		data: {
			column: 1,
			couponBgMode: 0,
		},
	},
	editData: [
		{
			type: 'radio',
			dataIndex: 'column',
			title: '优惠券样式',
			label: 'value',
			options: [
				{
					value: '竖排',
					column: 1
				},
				{
					value: '横排2',
					column: 2
				},
			],
		},
		{
			type: 'radio',
			dataIndex: 'couponBgMode',
			title: '预置背景',
			label: 'value',
			options: [
				{
					value: '预设1',
					couponBgMode: 0
				},
				{
					value: '预设2',
					couponBgMode: 1
				},
			],
		},
		{
			type: 'switch',
			dataIndex: 'isMock',
			title: '模拟数据',
		},
	],
}

export default Coupon
