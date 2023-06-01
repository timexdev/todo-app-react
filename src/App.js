import React, { useState } from 'react'
import Addtodo from './Components/Addtodo'
import Button from './Components/Button'
import Displaytodo from './Components/Displaytodo'


const App = () => {
  const pushTodo = (todoItem) =>{
    setallTodo([...allTodo, todoItem])
    
    
  }
  const [allTodo, setallTodo] = useState([])
  
  return (
    <>
      <Addtodo pushTodo={pushTodo}></Addtodo>
      <Button allTodo={allTodo}></Button>
      <Displaytodo allTodo={allTodo}></Displaytodo>
    </>
  )
}

export default App