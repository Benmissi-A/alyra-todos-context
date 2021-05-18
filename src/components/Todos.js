import React, { useEffect, useReducer } from "react"
import TodosList from "./TodosList"
import AddTodoForm from "./AddTodoForm"

import { todosReducer } from '../reducers/TodosReducer'
import { TodosDispatchContext } from '../context/TodosDispatchContext'
import {useIsMounted} from '../hooks/uselesMounted'

const initialState = {
  todos: [],
  loading: false,
  error: "",
}

const Todos = () => {
  const [state, dispatch] = useReducer(todosReducer, initialState)
  const {todos,loading, error} = state
  const isMouted = useIsMounted()

useEffect(()=>{
  dispatch({type :"FETCH_INIT"})
  fetch(`${process.env.REACT_APP_API_URL}/todos`)
  .then((responce)=>{
    if(!responce.ok){
      throw new Error(`Something wrong ERROR:${responce.statusText}`)
    }
    return responce.json()
  })
  .then((result)=>{
    console.log(result)
     if(isMouted.current){
    dispatch({type :"FETCH_SUCCESS" , payload : result})
  }
  })
  .catch((error)=> {
    if(isMouted.current){
      dispatch({type :"FETCH_FAILURE" , payload : error.message})
    }
  })
},[isMouted])

  return (
    <main>
      <h2 className="text-center">Ma liste de tâches ({state.length})</h2>
      {error && <p className="alert alert-danger">{error}</p>}
      <TodosDispatchContext.Provider value={dispatch}>
        <TodosList todos={todos} />
        <AddTodoForm />
      </TodosDispatchContext.Provider>
      {loading && <p className="alert alert-info">Loading ...</p>}
    </main>
  )
}

export default Todos