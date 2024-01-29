
import React from 'react'
import TodoContainer from './TodoContainer'

function Main({todos,updateTodoFn}) {
    const start = Array(10).fill("t")

    return (
        <div className='main-container p-2'>        
            {todos.todos.map(todo=>{
                return <TodoContainer key={todo.id} todo={todo} updateTodoFn={updateTodoFn} />
            })}
            {start.map((todo,ind)=>{
                return <TodoContainer key={ind} todo={todo} updateTodoFn={updateTodoFn} />
            })}
        </div>
  )
}

export default Main