import template from './template'
import { uuid } from '../../../utlis/index'

const Text = {
	config: {
		...template,
		id: uuid(6, 10),
		data: {
			title: '',
			textColor: '#000',
			fontSize: '16',
			textAlign: 'center',
			lineHeight: '',
			fontWeight: 'normal',
			bgColor: '#FFF',
			bgRadius: 0,
			space: '0',
			startTime: '',
			endTime: ''
		},
	},
	editData: [
		{
			type: 'input',
			dataIndex: 'title',
			title: '文字',
		},
		{
			type: 'colorPicker',
			dataIndex: 'textColor',
			title: '文字颜色',
		},
		{
			type: 'input',
			dataIndex: 'fontSize',
			title: '字体大小',
		},
		{
			type: 'radio',
			dataIndex: 'textAlign',
			title: '对齐方式',
			label: 'value',
			options: [
				{
					value: '居左',
					textAlign: 'left'
				},
				{
					value: '居中',
					textAlign: 'center'
				},
				{
					value: '居右',
					textAlign: 'right'
				}
			],
		},
		{
			type: 'input',
			dataIndex: 'lineHeight',
			title: '行高',
		},
		{
			type: 'radio',
			dataIndex: 'fontWeight',
			title: '文字粗细',
			label: 'value',
			options: [
				{
					value: '细',
					fontWeight: 'lighter'
				},
				{
					value: '正常',
					fontWeight: 'normal'
				},
				{
					value: '粗',
					fontWeight: 'bold'
				}
			],
		},
		{
			type: 'colorPicker',
			dataIndex: 'bgColor',
			title: '背景颜色',
		},
		{
			type: 'input',
			dataIndex: 'bgRadius',
			title: '背景圆角',
		},
		{
			type: 'input',
			dataIndex: 'space',
			title: '内边距',
		},
		{
			title: '开始时间',
			type: 'datetime',
			dataIndex: 'startTime',
		},
		{
			title: '结束时间',
			type: 'datetime',
			dataIndex: 'endTime',
		},
	],
	// 支持的表单配置
	// editData: [
	// 	{
	// 		type: 'input',
	// 		dataIndex: 'title',
	// 		title: '文字标题',
	// 	},
	// 	{
	// 		type: 'select',
	// 		dataIndex: 'jumpType',
	// 		title: '跳转类型',
	// 		label: 'value',
	// 		options: [
	// 			{
	// 				value: '小程序',
	// 				jumpType: '1'
	// 			},
	// 			{
	// 				value: 'APP',
	// 				jumpType: '2'
	// 			}
	// 		],
	// 	},
	// 	{
	// 		title: '创建时间',
	// 		type: 'datetime',
	// 		dataIndex: 'startTime',
	// 	},
	// 	{
	// 		title: '开关',
	// 		type: 'switch',
	// 		dataIndex: 'isOpen',
	// 	},
	// 	{
	// 		type: 'checkbox',
	// 		dataIndex: 'checkboxKey',
	// 		title: '复选',
	// 		label: 'value',
	// 		options: [
	// 			{
	// 				value: '小程序',
	// 				checkboxKey: '1'
	// 			},
	// 			{
	// 				value: 'APP',
	// 				checkboxKey: '2'
	// 			}
	// 		],
	// 	},
	// 	{
	// 		title: '单选',
	// 		type: 'radio',
	// 		dataIndex: 'arrivalType',
	// 		label: 'value',
	// 		options: [
	// 			{
	// 				value: '选项1',
	// 				arrivalType: 0,
	// 			},
	// 			{
	// 				arrivalType: 1,
	// 				value: '选项2',
	// 			},
	// 		],
	// 	},
	// ],
}

export default Text
