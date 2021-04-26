const AddTodoForm = (props) => {
  const { addTodo, setFilter, darkMode } = props
  const handleFormSubmit = (event) => {
    event.preventDefault()
    const newTodoText = event.target.elements.todo.value
    addTodo(newTodoText)
    event.target.reset()
    setFilter((filter) => (filter === "completed" ? "all" : filter))
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="input-group mb-2">
        <label className={`input-group-text ${darkMode ? 'bg-secondary text-white' : ''}`} htmlFor="todo">
          Ajouter une tâche
        </label>
        <input className={`form-control ${darkMode ? 'bg-dark text-white' : ''}`} id="todo" required />
      </div>
      <button type="submit" className={`btn btn-${darkMode ? 'primary' : 'info'}`}>
        allons-y !
      </button>
    </form>
  )
}

export default AddTodoForm
