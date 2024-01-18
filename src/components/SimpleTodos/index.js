import {Component} from 'react'
import {v4} from 'uuid'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    edit: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    edit: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    edit: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    edit: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    edit: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    edit: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    edit: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    edit: false,
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
    newTodo: {},
    inVal: '',
  }

  editTodo = id => {
    const {todosList} = this.state
    this.setState({
      todosList: todosList.map(i => {
        if (i.id === id) {
          return {...i, edit: !i.edit}
        }
        return i
      }),
    })
  }

  addNewTodo = () => {
    const {newTodo} = this.state
    this.setState(pre => ({todosList: [...pre.todosList, newTodo], inVal: ''}))
  }

  addTodo = event => {
    const a = {
      id: v4(),
      title: event.target.value,
      edit: false,
    }
    this.setState({newTodo: a, inVal: event.target.value})
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      todosList: updatedTodosList,
    })
  }

  render() {
    const {todosList, inVal} = this.state

    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <div className="div1">
            <input value={inVal} type="text" onChange={this.addTodo} />
            <button type="button" onClick={this.addNewTodo}>
              Add
            </button>
          </div>
          <h1 className="heading">Simple Todos</h1>
          <ul className="todos-list">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
                editTodo={this.editTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
