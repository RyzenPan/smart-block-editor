import template from './template'
import { uuid } from '../../../utlis/index'

const ImageRange = {
	config: {
		...template,
		id: uuid(6, 10),
		data: {
			selectId: 0,
			imageLists: [],
		},
	},
}

export default ImageRange
