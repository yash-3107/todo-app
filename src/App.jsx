import { useState } from "react"
import AddTodo from "./components/addTodo/addTodo"
import Todo_list from "./components/todo_list/todo_list"
import TodoContext from "./components/TodoContext"
import "./App.css"
function App() {
    const [list,setList] = useState([
                  {id:1,
                   data:'todo1',
                   finished:false},
                  {id:2,
                    data:'todo2',
                    finished:false}
])

  return (
    
        <TodoContext.Provider value={{list,setList}} >
              <AddTodo  />
              <Todo_list list={list} />
        </TodoContext.Provider>
  
   
  )
}

export default App
