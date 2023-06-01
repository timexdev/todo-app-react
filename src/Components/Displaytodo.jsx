import React from 'react'

const Displaytodo = (props) => {
  
  return (
    <>
      <div className="col">
        <div className="row mt-5">
          <div className="col-4 mx-auto">
            <h1 className='text-primary text-center'>List of Tasks</h1>
              <table className='table'>
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Tasks</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {props.allTodo.map((eachTodo, index)=>(
                    <tr key={index}>
                    <td className='fs-5'>{index + 1}</td>
                    <td className='fs-5'>{eachTodo}</td>
                    <td>
                      {/* <button className='btn btn-warning me-3'
                      onClick={()=>editStudent(index)}>Edit</button>
                       
                      <button className='btn btn-danger'
                      onClick={() => deleteStudent(index)}>Delete</button> */}
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
            
          </div>
        </div>
      </div>
      
      
    </>
  )
}

export default Displaytodo