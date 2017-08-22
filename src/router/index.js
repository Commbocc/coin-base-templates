import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Department from '@/components/Department'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Hello',
			component: Home
		},
		{
			path: '/department',
			name: 'Department',
			component: Department
		}
	]
})
