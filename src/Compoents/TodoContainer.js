function TodoContainer({
    todo,
    updateTodoFn,
    createTodoFn,
    readonly,
    updateCurrentId,
    currentId,
}) {
    return (
        <div className="todo-container flex items-center">
            <input
                type="checkbox"
                name="todo"
                data-id={todo.id}
                style={
                    todo.listStyle === "checkbox"
                        ? { display: "block" }
                        : { display: "none" }
                }
            />
            <textarea
                name="todo"
                id={todo.id}
                value={todo.todo}
                className=" border-b-2 border-gray-300 w-full resize-none h-8 pl-1
                            focus:outline-none"
                readOnly={readonly}
                onChange={(e) => {
                    const id = e.target.id;
                    const todo = {
                        id: +id,
                        todo: e.target.value,
                    };
                    updateTodoFn(todo);

                    const todoValue = e.target.value;
                    if (todoValue.length == 1) {
                        // const newTodo = { todo: "" };
                        // createTodoFn(newTodo);
                    }
                }}
                onClick={(e) => {
                    updateCurrentId(e.target.id);
                }}
            ></textarea>
        </div>
    );
}

export default TodoContainer;
