<template>
	<div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
				<MyHeader @addTodo="addTodo"> </MyHeader>
				<MyList :todos="todos"> </MyList>
				<MyFooter
					:todos="todos"
					@checkAllTodo="checkAllTodo"
					@clearAllTodo="clearAllTodo">
				</MyFooter>
			</div>
		</div>
	</div>
</template>

<script>
	import pubsub from 'pubsub-js'
	import MyHeader from './components/MyHeader.vue'
	import MyList from './components/MyList.vue'
	import MyFooter from './components/MyFooter.vue'
	export default {
		name: 'App',
		components: {
			MyHeader,
			MyFooter,
			MyList,
		},
		data() {
			return {
				todos: JSON.parse(localStorage.getItem('todos')) || [],
			}
		},
		methods: {
			// 添加一个Todo
			addTodo(todo) {
				this.todos.unshift(todo)
			},
			// 勾选or取消
			checkTodo(id) {
				// 遍历数组
				this.todos.forEach((todo) => {
					// 如果传入的和原来的id相同就取反
					if (todo.id === id) todo.done = !todo.done
				})
			},
			// 删除todo
			delTodo(_, id) {
				this.todos = this.todos.filter((todo) => {
					return todo.id !== id
				})
			},
			// 全选or全不选
			checkAllTodo(done) {
				this.todos.forEach((todo) => {
					todo.done = done
				})
			},
			// 清除所以完成的todo
			clearAllTodo() {
				this.todos = this.todos.filter((todo) => {
					// 过滤掉真留下假
					return !todo.done
				})
			},
			// 更新一个Todo
			updataTodo(id, title) {
				// 遍历数组
				this.todos.forEach((todo) => {
					// 如果传入的和原来的id相同就取反
					if (todo.id === id) todo.title = title
				})
			},
		},
		watch: {
			todos: {
				handler(value) {
					// 添加todos数据
					localStorage.setItem('todos', JSON.stringify(value))
				},
				deep: true,
			},
		},
		// 挂载
		mounted() {
			// 创建自定义事件
			this.$bus.$on('checkTodo', this.checkTodo)
			// 消息订阅与发布
			// 订阅
			this.pubId = pubsub.subscribe('deleteTodo', this.delTodo)
			// 修改
			this.$bus.$on('updataTodo', this.updataTodo)
		},
		beforeDestroy() {
			// 取消自定义事件
			this.$bus.$off('checkTodo','updataTodo')
			// 取消订阅
			pubsub.unsubscribe(this.pubId)
		},
	}
</script>

<style>
	/*base*/
	body {
		background: #fff;
	}

	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
			0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}

	.btn-edit {
		color: #fff;
		background-color: rgb(74, 204, 255);
		border: 1px solid rgba(0, 247, 255, 0.785);
		margin-right: 5px;
	}

	.btn-edit:hover {
		color: #fff;
		background-color: #1b87ab;
	}

	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}

	.btn-danger:hover {
		color: #fff;
		background-color: #bd362f;
	}

	.btn:focus {
		outline: none;
	}

	.todo-container {
		width: 600px;
		margin: 0 auto;
	}
	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>
