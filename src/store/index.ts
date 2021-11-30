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
	mutations: {
		// 新增组件
		addPointData(state, item: TNewData) {
			const commonConfig = _.cloneDeep(schemaMap[item.type]?.config)
			commonConfig.id = uuid(6, 10)
			state.componentArray.push(commonConfig)
		},
		// 更新画板组件列表
		setPointData(state, newCompArray) {
			state.componentArray = newCompArray
			localStorage.setItem('ZHIDA_TEMP_DATA', JSON.stringify(newCompArray))
		},
		// 清除所有画板数据
		clearPointData(state) {
			state.componentArray = []
			localStorage.setItem(
				'ZHIDA_TEMP_DATA',
				JSON.stringify(state.componentArray)
			)
		},
		// 选中当前组件
		modCurrPointData(state, currentId) {
			if (!currentId) return
			const currentItem = state.componentArray.find(
				(i: TNewData) => i.id === currentId
			)
			state.currentCompontent = currentItem
		},
		updateCurrPointData(state, data) {
			if (!data) return
			const currentIndex = state.componentArray.findIndex(
				(i: TNewData) => i.id === state.currentCompontent.id
			)
			const componentArray = _.cloneDeep(state.componentArray)
			componentArray[currentIndex].data = data
			state.componentArray = componentArray
			localStorage.setItem('ZHIDA_TEMP_DATA', JSON.stringify(componentArray))
		},
		// 清除选中的当前组件
		clearCurrPointData(state) {
			state.currentCompontent = {}
		},
	},
	actions: {},
	modules: {},
})
