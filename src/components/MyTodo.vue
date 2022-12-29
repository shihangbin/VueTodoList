<template>
	<li>
		<label>
			<input
				type="checkbox"
				:checked="todoObj.done"
				@click="handerCheck(todoObj.id)" />
			<span>{{ todoObj.title }}</span>
		</label>
		<button
			class="btn btn-danger"
			@click="del(todoObj.id)">
			删除
		</button>
	</li>
</template>

<script>
	import pubsub from 'pubsub-js'
	export default {
		name: 'MyTodo',
		props: ['todoObj'],
		methods: {
			handerCheck(id) {
				// 通知App组件done值取反
				// 触发事件checkTodo返回id
				this.$bus.$emit('checkTodo', id)
			},
			del(id) {
				// 发送订阅消息
				pubsub.publish('deleteTodo', id)
			},
		},
	}
</script>

<style scoped>
	/*item*/
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}
	li:hover button {
		display: block;
	}

	li:hover {
		background: #ddd;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}
</style>
