import { createRouter, createWebHistory } from 'vue-router'
import Editor from '../pages/Editor/index.vue'

const routes = [
	{
		path: '/',
		redirect: '/editor',
	},
	{
		path: '/editor',
		name: 'Editor',
		meta: {
			title: '页面编辑器',
		},
		component: Editor,
	},
	{
		path: '/preview',
		name: 'Preview',
		meta: {
			title: '预览',
		},
		component: () => import('../pages/Preview/index.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(''),
	routes,
})

router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title} | 智搭`
	next()
})

export default router
