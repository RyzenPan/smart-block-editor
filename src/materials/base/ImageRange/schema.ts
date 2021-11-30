import template from './template'
import { uuid } from '../../../utlis/index'

const ImageRange = {
	config: {
		...template,
		id: uuid(6, 10),
		data: {
			imageLists: [],
		},
	},
	editData: [
		{
			key: 'title',
      label: '标题',
      type: 'input',
		}
	],
}

export default ImageRange
