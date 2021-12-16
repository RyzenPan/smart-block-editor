import _ from 'lodash'
import { createStore } from 'vuex'
import { TNewData, TPageData } from './typing'
import schemaMap from '../materials/schema'
import { uuid } from '../utlis'
import { message } from 'ant-design-vue'

const pointDataCache = JSON.parse(
	localStorage.getItem('ZHIDA_TEMP_DATA') || '[]'
)

export default createStore({
	state: {
		componentArray: pointDataCache,
		currentCompontent: {} as TNewData | {},
		pageData: {
			naviBgColor: '#fff',
			naviBarTextStyle: 'black',
			title: '标题',
		} as TPageData | {},
	},
	mutations: {
		// 新增组件
		addPointData(state, item: TNewData) {
			const commonConfig = _.cloneDeep(schemaMap[item.type]?.config)
			commonConfig.id = uuid(6, 10)
			state.componentArray.push(commonConfig)
			localStorage.setItem('ZHIDA_TEMP_DATA', JSON.stringify(state.componentArray))
			state.currentCompontent = commonConfig;
			message.success(`新增${commonConfig.displayName}组件成功`);
		},
		// 更新画板组件列表
		setPointData(state, newCompArray) {
			state.componentArray = newCompArray
			localStorage.setItem('ZHIDA_TEMP_DATA', JSON.stringify(newCompArray))
		},
		// 清除所有画板数据
		clearPointData(state) {
			state.componentArray = [];
			localStorage.setItem(
				'ZHIDA_TEMP_DATA',
				JSON.stringify(state.componentArray)
			);
			state.currentCompontent = {};
			message.success(`清除成功`);
		},
		// 选中当前组件
		modCurrPointData(state, currentId) {
			if (!currentId) return;
			const currentItem = state.componentArray.find(
				(i: TNewData) => i.id === currentId
			);
			state.currentCompontent = currentItem;
		},
		// 更新选中的组件的配置信息
		updateCurrPointData(state: any, data) {
			if (!data) return;
			const currentIndex = state.componentArray.findIndex(
				(i: TNewData) => i.id === state.currentCompontent.id
			);
			const componentArray = _.cloneDeep(state.componentArray);
			componentArray[currentIndex].data = data;
			state.componentArray = componentArray;
			localStorage.setItem('ZHIDA_TEMP_DATA', JSON.stringify(componentArray));
		},
		// 清除选中的当前组件
		clearCurrPointData(state) {
			state.currentCompontent = {};
		},
		// 复制组件
		copyPointData(state, newItem) {
			const currentIndex = state.componentArray.findIndex((i: TNewData) => i.id === newItem.id);
			state.componentArray.splice(currentIndex, 0, { ...newItem, id: uuid(6, 10) });
			localStorage.setItem('ZHIDA_TEMP_DATA', JSON.stringify(state.componentArray));
			message.success(`复制成功`);
		},
		// 删除组件
		delPointData(state, id) {
			const currentIndex = state.componentArray.findIndex((i: TNewData) => i.id === id)
			state.componentArray.splice(currentIndex, 1)
			localStorage.setItem('ZHIDA_TEMP_DATA', JSON.stringify(state.componentArray))
			state.currentCompontent = {}
			message.success(`删除成功`);
		},
		// 调整组件上下顺序
		upDownComp(state, { id, type }) {
			const currentIndex = state.componentArray.findIndex((i: TNewData) => i.id === id)

			if (type === 'up' && currentIndex > 0) {
				upDownHandle(state.componentArray, currentIndex, type);
			} else if (type === 'down' && currentIndex < state.componentArray.length - 1) {
				upDownHandle(state.componentArray, currentIndex, type);
			}

			// 处理调整上下组件功能函数
			function upDownHandle(list: TNewData[], index: number, type: string) {
				const currItem = list.splice(index, 1);
				const sourceIndex = type === 'down' ? index + 1 : index - 1;
				list.splice(sourceIndex, 0, currItem[0]);
				state.currentCompontent = currItem[0]
				localStorage.setItem('ZHIDA_TEMP_DATA', JSON.stringify(state.componentArray))
			}
		},
	},
	actions: {},
	modules: {},
})
