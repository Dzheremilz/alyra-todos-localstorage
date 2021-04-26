import Todo from "./Todo"

const TodosList = (props) => {
  const { todos, deleteTodo, toggleCompleteTodo, darkMode } = props
  return todos.map((el) => {
    return (
      <Todo
        key={el.id}
        todo={el}
        deleteTodo={deleteTodo}
        toggleCompleteTodo={toggleCompleteTodo}
        darkMode={darkMode}
      />
    )
  })
}

export default TodosList
