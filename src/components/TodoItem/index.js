import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo, editTodo} = props
  const {id, title, edit} = todoDetails

  const editBtn = edit ? 'Save' : 'Edit'

  const editedTodo = edit ? (
    <input type="text" value={title} />
  ) : (
    <p className="title">{title}</p>
  )

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  const onEditTodo = () => {
    editTodo(id)
  }

  return (
    <li className="todo-item">
      {editedTodo}
      <div>
        <button type="button" className="delete-btn" onClick={onDeleteTodo}>
          Delete
        </button>
        <button type="button" className="delete-btn" onClick={onEditTodo}>
          {editBtn}
        </button>
      </div>
    </li>
  )
}

export default TodoItem
