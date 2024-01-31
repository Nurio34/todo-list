import TodoContainer from "./TodoContainer";

function Main({
    todos,
    updateTodoFn,
    createTodoFn,
    readonly,
    updateCurrentId,
    currentId,
}) {
    const start = Array(10).fill("t");
    return (
        <div className="main-container p-2">
            {todos.map((todo) => {
                return (
                    <TodoContainer
                        key={todo.id}
                        todo={todo}
                        updateTodoFn={updateTodoFn}
                        createTodoFn={createTodoFn}
                        readonly={readonly}
                        updateCurrentId={updateCurrentId}
                        currentId={currentId}
                    />
                );
            })}
        </div>
    );
}

export default Main;
