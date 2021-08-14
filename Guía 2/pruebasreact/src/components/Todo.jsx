import React from 'react'

const Todo = ({todo,toda,index,deleteTodo}) => {
    return(
        <>
        <div className="list">
            <h3>{todo+' - '+toda}</h3><button className="btn-delete" onClick={()=> deleteTodo(index)}>x</button>
        </div>
        </>
    )
}

export default Todo