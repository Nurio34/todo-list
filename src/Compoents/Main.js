import TodoContainer from "./TodoContainer";

function Main({ todos, updateTodoFn, createTodoFn }) {
    const start = Array(10).fill("t");
    return (
        <div className="main-container p-2">
            {todos.todos.map((todo) => {
                return (
                    <TodoContainer
                        key={todo.id}
                        todo={todo}
                        updateTodoFn={updateTodoFn}
                        createTodoFn={createTodoFn}
                    />
                );
            })}
        </div>
    );
}

export default Main;
