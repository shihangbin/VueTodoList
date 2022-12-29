<template>
	<li>
		<label>
			<input
				type="checkbox"
				:checked="todoObj.done"
				@click="handerCheck(todoObj.id)" />
			<span v-show="!todoObj.isEdit">{{ todoObj.title }}</span>
			<input
				type="text"
				:value="todoObj.title"
				v-show="todoObj.isEdit"
				@blur="handerBlur(todoObj, $event)"
				ref="inputTitle" />
		</label>
		<button
			class="btn btn-danger"
			@click="del(todoObj.id)">
			删除
		</button>
		<button
			class="btn btn-edit"
			@click="handerEdit(todoObj)"
			v-show="!todoObj.isEdit">
			修改
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
			// 编辑
			handerEdit(todo) {
				if (todo.hasOwnProperty('isEdit')) {
					todo.isEdit = true
				} else {
					this.$set(todo, 'isEdit', true)
				}
				// $nextTick dom执行完后执行
				this.$nextTick(function () {
					this.$refs.inputTitle.focus()
				})
			},
			// 失去焦点回调
			handerBlur(todo, e) {
				todo.isEdit = false
				if (!e.target.value.trim()) return alert('不能为空！')
				this.$bus.$emit('updataTodo', todo.id, e.target.value)
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
