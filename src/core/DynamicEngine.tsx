import { h, defineComponent } from 'vue'

export default defineComponent({
	name: 'DynamicEngine',
  mounted() {
    const modules = import.meta.glob('../materials/base/*/index.vue')
    for (const path in modules) {
      modules[path]().then(mod => {
        console.log(path, mod)
      })
    }
    console.log(modules, 'modules')
  },
	render() {
		return <div>DynamicEngine</div>
	},
})

