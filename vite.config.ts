import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components'
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
	base: 'http://106.53.240.107/',
	plugins: [
		vue(),
		ViteComponents({
			customComponentResolvers: [AntDesignVueResolver()],
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	esbuild: {
		jsxFactory: 'h',
		jsxFragment: 'Fragment'
	},
	css: {
		preprocessorOptions: {
			less: {
				modifyVars: {
					'primary-color': '#4ea997',
					'border-radius-base': '2px',
				},
				javascriptEnabled: true,
			}
		}
	}
})
