<template>
	<ul class="todo-main">
		<MyTodo
			v-for="todoObj in todos"
			:key="todoObj.id"
			:todoObj="todoObj"
			:checkTodo="checkTodo"
			:delTodo="delTodo">
		</MyTodo>
	</ul>
</template>

<script>
	import MyTodo from './MyTodo.vue'
	export default {
		name: 'MyList',
		components: { MyTodo },
		props: ['todos','checkTodo','delTodo'],
	}
</script>

<style scoped>
	/*main*/
	.todo-main {
		margin-left: 0px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 0px;
	}

	.todo-empty {
		height: 40px;
		line-height: 40px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding-left: 5px;
		margin-top: 10px;
	}
</style>
