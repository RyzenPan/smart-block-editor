import template from './template'
import { uuid } from '../../../utlis/index'

const Swiper = {
	config: {
		...template,
		id: uuid(6, 10),
		data: {
			imageSrcs: [],
		},
	},
	editData: [
		{
			type: 'dynamicInput',
			dataIndex: 'imageSrcs',
			title: '轮播图片',
		},
	],
}

export default Swiper
