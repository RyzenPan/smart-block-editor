import _ from 'lodash'
import { createStore } from 'vuex'
import { TNewData } from './typing'
import schemaMap from '@/materials/schema'
import { uuid } from '../utlis'

const pointDataCache = JSON.parse(
	localStorage.getItem('ZHIDA_TEMP_DATA') || '[]'
)

export default createStore({
	state: {
		componentArray: pointDataCache,
		currentCompontent: {},
	},
	getters: {
		getComponentArray(state) {
			console.log(state, 'state')
			return state.componentArray
		},
	},
	mutations: {
		addPointData(state, item: TNewData) {
			const commonConfig = _.cloneDeep(schemaMap[item.type]?.config)
			commonConfig.id = uuid(6, 10)
			state.componentArray.push(commonConfig)
		},
		setPointData(state, newCompArray) {
			state.componentArray = newCompArray
			localStorage.setItem('ZHIDA_TEMP_DATA', JSON.stringify(newCompArray))
		},
		clearPointData(state) {
			state.componentArray = []
			localStorage.setItem('ZHIDA_TEMP_DATA', JSON.stringify(state.componentArray))
		}
	},
	actions: {},
	modules: {},
})
