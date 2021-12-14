import template from './template'
import { uuid } from '../../../utlis/index'

const ImageRange = {
	config: {
		...template,
		id: uuid(6, 10),
		data: {
			imageSrc: '',
			linkUrl: '',
		},
	},
	editData: [
		{
			type: 'input',
			dataIndex: 'imageSrc',
			title: '图片路径',
		},
		{
			type: 'input',
			dataIndex: 'linkUrl',
			title: '跳转地址',
		},
	],
}

export default ImageRange
