import React, { useState } from 'react'

const Addtodo = (props) => {
    const [todoItem, settodoItem] = useState("")
    
    
  return (
    <>
        <div className="container">
            <div className="row mt-5">
                <div className="col-9 mx-auto shadow-sm">
                    <input 
                    type="text" 
                    placeholder='Input Todo Item'
                    className='form-control my-2'
                    onChange={(e) => settodoItem(e.target.value)}
                    value={todoItem}
                     />

                     <button onClick={()=> props.pushTodo(todoItem)} className='btn btn-primary w-100 my-3'>Add Todo</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Addtodo