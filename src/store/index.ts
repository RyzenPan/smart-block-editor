import { createStore } from 'vuex'
import { TNewData } from './typing'

export default createStore({
	state: {
		componentArray: [],
		currentCompontent: {},
	},
	mutations: {
		addPointData({ componentArray }: any, newData: TNewData) {
			componentArray.push(newData)
		}
	},
	actions: {},
	modules: {},
})
