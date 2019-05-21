class TodoStore {
  constructor() {
    this.todos = [{id: 1, title: 'premiere todo', completed: false, editing: false},
                  {id: 2, title: 'deuxieme todo', completed: true, editing: false}]
    this.filter = 'all'
  }
  uniqueId () {
    return Math.random().toString(36).substr(2, 9) + '_' + Math.random().toString(36).substr(2, 9)
  }
  addTodo (title) {
    this.todos = [
      {
        id: this.uniqueId(),
        title,
        completed: false,
        editing: false
      },
      ...this.todos
    ]
  }
  deleteTodo (todo) {
    this.todos = this.todos.filter(t => t !== todo)
  }
  toggleEdit (todo, completed) {
    this.todos = this.todos.map(t => t === todo ? {...t, completed} : t)
  }
  updateTodo (todo, title) {
    this.todos = this.todos.map(t => t === todo ? {...t, title} : t)
    this.toggleEdit(todo, false)
  }
  setFilter (filter) {
    this.filter = filter
  }
  toggleAll () {
    this.todos = this.todos.map(t => ({...t, completed: true}))
  }
  clearCompleted () {
    this.todos = this.todos.filter(t => t.completed === false)
  }
  getFilteredTodos() {
    let tab = [];
    switch (this.filter) {
      case 'all':
        tab = this.todos
        break;
      case 'done':
        tab = this.todos.filter(t => t.completed === true)
        break;
        case 'doing':
        tab = this.todos.filter(t => t.completed === false)
        break;
      default:
        break;
    }
    return tab;
  }
  getRemainingTodos () {
    return this.todos.filter(t => t.completed === false).length
  }
}

export default TodoStore