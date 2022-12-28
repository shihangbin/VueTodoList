<<<<<<< HEAD
<<<<<<< HEAD
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
=======
<template>
	<ul class="todo-main">
		<MyTodo
			v-for="(todoObj) in todos"
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
>>>>>>> fe3a12d (VueTodoList本地存储)
=======
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
>>>>>>> 173e97f066e70396a174bdc7df2ff5bd7812fdfe
