import React, { useEffect, useReducer } from "react"
import TodosList from "./TodosList"
import AddTodoForm from "./AddTodoForm"

import { todosReducer } from '../reducers/TodosReducer'
import { TodosDispatchContext } from '../context/TodosDispatchContext'

const initialState = {
  todos: [],
  loading: false,
  error: "",
}

const Todos = () => {
  const [state, dispatch] = useReducer(todosReducer, initialState)
  const {todos,loading, error} = state
  return (
    <main>
      <h2 className="text-center">Ma liste de tâches ({state.length})</h2>
      {error && <p className="alert alert-danger">{error}</p>}
      <TodosDispatchContext.Provider value={dispatch}>
        <TodosList todos={todos} />
        <AddTodoForm />
      </TodosDispatchContext.Provider>
    </main>
  )
}

export default Todos