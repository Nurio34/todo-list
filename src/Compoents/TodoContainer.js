
import React from 'react'

function TodoContainer({updateTodoFn}) {

    return (
    <div className='todo-container'>
        <textarea name="todo" id="todoArea" 
            className=' border-2 border-black w-full resize-none h-8'
            onChange={(e)=>updateTodoFn(e.target.value)}
        ></textarea>
    </div>
  )
}

export default TodoContainer