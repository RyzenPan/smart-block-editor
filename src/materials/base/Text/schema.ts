import template from './template'
import { uuid } from '../../../utlis/index'

const Text = {
	config: {
		...template,
		id: uuid(6, 10),
		data: {
			title: '',
		},
	},
	editData: [
		{
			type: 'input',
			dataIndex: 'title',
			title: '文字标题',
		},
		{
			type: 'select',
			dataIndex: 'jumpType',
			title: '跳转类型',
			label: 'value',
			options: [
				{
					value: '小程序',
					jumpType: '1'
				},
				{
					value: 'APP',
					jumpType: '2'
				}
			],
		},
		{
			title: '创建时间',
			type: 'datetime',
			dataIndex: 'startTime',
		},
		{
			title: '开关',
			type: 'switch',
			dataIndex: 'isOpen',
		},
		{
			type: 'checkbox',
			dataIndex: 'checkboxKey',
			title: '复选',
			label: 'value',
			options: [
				{
					value: '小程序',
					checkboxKey: '1'
				},
				{
					value: 'APP',
					checkboxKey: '2'
				}
			],
		},
		{
			title: '单选',
			type: 'radio',
			dataIndex: 'arrivalType',
			label: 'value',
			options: [
				{
					value: '选项1',
					arrivalType: 0,
				},
				{
					arrivalType: 1,
					value: '选项2',
				},
			],
		},
	],
}

export default Text
