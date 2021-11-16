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
		component: Editor,
	},
	{
		path: '/preview',
		name: 'Preview',
		component: () => import('../pages/Preview/index.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(''),
	routes,
})

router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title || '页面编辑器'} | 智搭`
	next()
})

export default router
