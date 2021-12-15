import template from './template'
import { uuid } from '../../../utlis/index'

const Button = {
	config: {
		...template,
		id: uuid(6, 10),
		data: {
			title: '',
			buttonType: 'primary',
			size: 'middle',
			linkUrl: '',
			space: '0'
		},
	},
	editData: [
		{
			type: 'input',
			dataIndex: 'title',
			title: '按钮内容',
		},
		{
			type: 'switch',
			dataIndex: 'isDanger',
			title: '危险按钮',
		},
		{
			type: 'radio',
			dataIndex: 'buttonType',
			title: '按钮类型',
			label: 'value',
			options: [
				{
					value: '主按钮',
					buttonType: 'primary'
				},
				{
					value: '次按钮',
					buttonType: ''
				},
				{
					value: '虚线按钮',
					buttonType: 'dashed'
				},
				{
					value: '文本按钮',
					buttonType: 'text'
				},
				{
					value: '链接按钮',
					buttonType: 'link'
				},
			],
		},
		{
			type: 'radio',
			dataIndex: 'size',
			title: '按钮大小',
			label: 'value',
			options: [
				{
					value: '大',
					size: 'large'
				},
				{
					value: '中',
					size: 'middle'
				},
				{
					value: '小',
					size: 'small'
				},
			],
		},
		{
			type: 'input',
			dataIndex: 'linkUrl',
			title: '跳转地址',
		},
		{
			type: 'input',
			dataIndex: 'space',
			title: '内边距',
			placeholder: '可用空格隔开表示上下和左右边距'
		},
	],
}

export default Button
