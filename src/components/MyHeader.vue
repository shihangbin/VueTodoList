<<<<<<< HEAD
<<<<<<< HEAD
<template>
	<div class="todo-header">
		<input
			type="text"
			placeholder="请输入你的任务名称，按回车键确认"
			v-model="title"
			@keyup.enter="add()" />
			<!-- @keyup.enter 按下回车调用函数 -->
	</div>
</template>

<script>
	import { nanoid } from 'nanoid'
	export default {
		name: 'MyHeader',
		// 接收数据
		props: ['addTodo'],
		data() {
			return {
				title: '',
			}
		},
		methods: {
			add() {
				// 去掉前后的空格
				if (!this.title.trim()) return
				// 将用户的输入包装成todo对象
				const todoObj = { id: nanoid(), title: this.title, done: false }
				// 通知App组件添加一个TodoObj
				this.addTodo(todoObj)
				// 清空输入
				this.title = ''
			},
		},
	}
</script>

<style scoped>
	/*header*/
	.todo-header input {
		width: 560px;
		height: 28px;
		font-size: 14px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 4px 7px;
	}

	.todo-header input:focus {
		outline: none;
		border-color: rgba(82, 168, 236, 0.8);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
			0 0 8px rgba(82, 168, 236, 0.6);
	}
</style>
=======
<template>
	<div class="todo-header">
		<input
			type="text"
			placeholder="请输入你的任务名称，按回车键确认"
			v-model="title"
			@keyup.enter="add()" />
			<!-- @keyup.enter 按下回车调用函数 -->
	</div>
</template>

<script>
	import { nanoid } from 'nanoid'
	export default {
		name: 'MyHeader',
		// 接收数据
		props: ['addTodo'],
		data() {
			return {
				title: '',
			}
		},
		methods: {
			add() {
				// 去掉前后的空格
				if (!this.title.trim()) return
				// 将用户的输入包装成todo对象
				const todoObj = { id: nanoid(), title: this.title, done: false }
				// 通知App组件添加一个TodoObj
				this.addTodo(todoObj)
				// 清空输入
				this.title = ''
			},
		},
	}
</script>

<style scoped>
	/*header*/
	.todo-header input {
		width: 560px;
		height: 28px;
		font-size: 14px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 4px 7px;
	}

	.todo-header input:focus {
		outline: none;
		border-color: rgba(82, 168, 236, 0.8);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
			0 0 8px rgba(82, 168, 236, 0.6);
	}
</style>
>>>>>>> fe3a12d (VueTodoList本地存储)
=======
<template>
	<div class="todo-header">
		<input
			type="text"
			placeholder="请输入你的任务名称，按回车键确认"
			v-model="title"
			@keyup.enter="add()" />
			<!-- @keyup.enter 按下回车调用函数 -->
	</div>
</template>

<script>
	import { nanoid } from 'nanoid'
	export default {
		name: 'MyHeader',
		// 接收数据
		props: ['addTodo'],
		data() {
			return {
				title: '',
			}
		},
		methods: {
			add() {
				// 去掉前后的空格
				if (!this.title.trim()) return
				// 将用户的输入包装成todo对象
				const todoObj = { id: nanoid(), title: this.title, done: false }
				// 通知App组件添加一个TodoObj
				this.addTodo(todoObj)
				// 清空输入
				this.title = ''
			},
		},
	}
</script>

<style scoped>
	/*header*/
	.todo-header input {
		width: 560px;
		height: 28px;
		font-size: 14px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 4px 7px;
	}

	.todo-header input:focus {
		outline: none;
		border-color: rgba(82, 168, 236, 0.8);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
			0 0 8px rgba(82, 168, 236, 0.6);
	}
</style>
>>>>>>> 173e97f066e70396a174bdc7df2ff5bd7812fdfe
