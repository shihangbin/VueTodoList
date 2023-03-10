// 引入简易版vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'

// 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

// 绑定组件
new Vue({
	render: (h) => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this
	},
}).$mount('#app')
