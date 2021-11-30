import template from './template'
import { uuid } from '../../../utlis/index'

const ImageRange = {
	config: {
		...template,
		id: uuid(6, 10),
		data: {
			imageSrc: '',
		},
	},
	editData: [
		{
			type: 'input',
			dataIndex: 'imageSrc',
			title: '图片路径',
		},
	],
}

export default ImageRange
