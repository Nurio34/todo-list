import { useState } from "react";
import Header from "./Compoents/Header";
import Main from "./Compoents/Main";

function App() {
    const [todos, setTodos] = useState(() => {
        const initialTodos = Array(19).fill("");
        const todosArr = initialTodos.map((todo, ind) => {
            return {
                todo: todo,
                id: ind + 1,
            };
        });

        return (
            JSON.parse(localStorage.getItem("todos")) || {
                title: "",
                todos: todosArr,
            }
        );
    });

    const updateTitleFn = (title) => {
        const updatedTodos = { ...todos, title: title };
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };

    const updateTodoFn = (updatedTodo) => {
        const todoId = updatedTodo.id;
        const updatedTodos = todos.todos.map((todo) => {
            if (todo.id == todoId) {
                return updatedTodo;
            }
            return todo;
        });
        setTodos((todos) => {
            return { ...todos, todos: updatedTodos };
        });
        localStorage.setItem(
            "todos",
            JSON.stringify({ ...todos, todos: updatedTodos }),
        );
    };

    const createTodoFn = (newTodo) => {
        newTodo.id = todos.todos.length + 1;
        const newTodos = [...todos.todos, newTodo];
        console.log(newTodos);
        // setTodos({ ...todos, todos: newTodos });
        // localStorage.setItem(
        //     "todos",
        //     JSON.stringify({ ...todos, todos: newTodos }),
        // );
    };

    return (
        <div className="App">
            <Header updateTitleFn={updateTitleFn} title={todos.title} />
            <Main
                todos={todos}
                updateTodoFn={updateTodoFn}
                createTodoFn={createTodoFn}
            />
        </div>
    );
}

export default App;
