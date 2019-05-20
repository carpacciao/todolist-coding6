class TodoStore {
  constructor() {
    // Seeded Todos
    this.todos = [
      {
        title: 'premiere todo',
        completed: false,
        editing: false
      },
      {
        title: 'deuxieme todo',
        completed: true,
        editing: false
      }
    ]
  }
  addTodo () {
    this.todos.push('oui')
  }
}

export default TodoStore