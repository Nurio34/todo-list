import { useState } from "react";
import Header from "./Compoents/Header";
import Main from "./Compoents/Main";


function App() {

  const [todos,setTodos] = useState(()=>{
    return JSON.parse(localStorage.getItem("todos")) || {title:"",todos:[]}
  })

  const updateTitleFn = (title) => {
    const updatedTodos = {...todos, title:title}
      setTodos(updatedTodos)
      localStorage.setItem("todos", JSON.stringify(updatedTodos))
  }

  const updateTodoFn = (todo) => {
    const updatedTodo = {...todos, todos:todo}
    const updatedTodos = {...todos, todos:updatedTodo}
      setTodos(updatedTodos)
      localStorage.setItem("todos", JSON.stringify(updatedTodos))
  }

  return (
    <div className="App">
      <Header updateTitleFn={updateTitleFn} title={todos.title} />
      <Main todos={todos} updateTodoFn={updateTodoFn} />
    </div>
  );
}

export default App;
