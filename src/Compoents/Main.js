import TodoContainer from "./TodoContainer";

function Main({
    todos,
    updateTodoFn,
    createTodoFn,
    readonly,
    updateCurrentId,
    updateLineCount,
    handleComplated
}) {
    const start = Array(10).fill("t");
    return (
        <div className="main-container p-2 absolute top-10 w-full -z-10">
            {todos.map((todo) => {
                return (
                    <TodoContainer
                        key={todo.id}
                        todo={todo}
                        updateTodoFn={updateTodoFn}
                        createTodoFn={createTodoFn}
                        readonly={readonly}
                        updateCurrentId={updateCurrentId}
                        updateLineCount={updateLineCount}
                        handleComplated={handleComplated}
                    />
                );
            })}
        </div>
    );
}

export default Main;
