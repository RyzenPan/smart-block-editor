import template from './template'
import { uuid } from '../../../utlis/index'

const Swiper = {
	config: {
		...template,
		id: uuid(6, 10),
		data: {
			imageSrcs: [],
			isAutoplay: false,
		},
	},
	editData: [
		{
			type: 'dynamicInput',
			dataIndex: 'imageSrcs',
			title: '轮播图片',
		},
		{
			type: 'switch',
			dataIndex: 'isAutoplay',
			title: '自动播放',
		},
	],
}

export default Swiper
