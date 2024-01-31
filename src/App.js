import { useEffect, useState } from "react";
import Header from "./Compoents/Header";
import Main from "./Compoents/Main";
import Footer from "./Compoents/Footer";

function App() {
    const [todos, setTodos] = useState(() => {
        const initialTodos = Array(38).fill("");
        const todosArr = initialTodos.map((todo, ind) => {
            return {
                todo: todo,
                id: ind + 1,
                listStyle: "",
            };
        });

        return (
            JSON.parse(localStorage.getItem("todos")) || {
                title: "",
                todos: todosArr,
            }
        );
    });

    const [readonly, setReadonly] = useState(false);

    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
        JSON.parse(localStorage.getItem("todos"));
    }, [todos]);

    const updateTitleFn = (title) => {
        const updatedTodos = { ...todos, title: title };
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };

    const updateTodoFn = (updatedTodo) => {
        const updatedTodoList = todos.todos.map((todoObj) => {
            return todoObj.id === updatedTodo.id
                ? { ...todoObj, todo: updatedTodo.todo }
                : todoObj;
        });
        setTodos((preState) => {
            return { ...preState, todos: updatedTodoList };
        });
    };

    const createTodoFn = (newTodo) => {
        // const newTodoId = todos.todos.length + 1;
        // const newTodoObj = { id: newTodoId, todo: newTodo.todo };
        // const updatedTodoList = [...todos.todos, newTodoObj];
        // setTodos((preState) => {
        //     return { ...preState, todos: updatedTodoList };
        // });
    };

    const handleReadonlyFn = () => {
        console.log("clicked");
        setReadonly(!readonly);
    };

    const updateCurrentId = (id) => {
        setCurrentId((preState) => {
            return id;
        });
    };

    const handleCheckVisibilty = (id) => {
        const updatedTodoList = todos.todos.map((todoObj) => {
            if (todoObj.id == id && todoObj.listStyle === "") {
                return { ...todoObj, listStyle: "checkbox" };
            } else if (todoObj.id == id && todoObj.listStyle === "") {
                return { ...todoObj, listStyle: "" };
            } else {
                return todoObj;
            }
        });
        setTodos((preState) => {
            return { ...preState, todos: updatedTodoList };
        });
        console.log(updatedTodoList);
    };

    return (
        <div className="App">
            <Header
                updateTitleFn={updateTitleFn}
                title={todos.title}
                handleReadonlyFn={handleReadonlyFn}
            />
            <Main
                todos={todos.todos}
                updateTodoFn={updateTodoFn}
                createTodoFn={createTodoFn}
                readonly={readonly}
                updateCurrentId={updateCurrentId}
                currentId={currentId}
            />
            <Footer
                handleCheckVisibilty={handleCheckVisibilty}
                currentId={currentId}
            />
        </div>
    );
}

export default App;
