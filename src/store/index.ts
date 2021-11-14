import _ from 'lodash'
import { createStore } from 'vuex'
import { TNewData } from './typing'
import schemaMap from '@/materials/schema'
import { uuid } from '../utlis'

export default createStore({
	state: {
		componentArray: [],
		currentCompontent: {},
	},
	mutations: {
		addPointData({ componentArray }: any, item: TNewData) {
			const commonConfig = _.cloneDeep(schemaMap[item.type]?.config)
			commonConfig.id = uuid(6, 10)
			componentArray.push(commonConfig)
		},
		addPointDataForIndex({ componentArray }: any, {item, index}) {
			const commonConfig = _.cloneDeep(schemaMap[item.type]?.config)
			commonConfig.id = uuid(6, 10)
			componentArray.splice(index, 0, commonConfig)
		},
		setPointData({ componentArray }: any, newCompArray) {
			componentArray = newCompArray
		}
	},
	actions: {},
	modules: {},
})
