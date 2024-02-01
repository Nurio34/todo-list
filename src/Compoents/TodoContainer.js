function TodoContainer({
    todo,
    updateTodoFn,
    createTodoFn,
    readonly,
    updateCurrentId,
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
                className=" w-5 h-5"
            />
            <textarea
                name="todo"
                id={todo.id}
                value={todo.todo}
                className=" border-b-2 border-gray-300 w-full resize-none h-8 pl-1
                            focus:outline-none"
                style={{
                    textAlign:
                        todo.alignStyle === 'right'
                        ? 'right'
                        : todo.alignStyle === 'center'
                        ? 'center'
                        : todo.alignStyle === 'left'
                        ? 'left'
                        : undefined,
                    fontWeight: todo.text.bold ? 'bold' : 'normal',
                    fontStyle : todo.text.italic ? "italic" : "normal",
                    textDecoration : 
                        todo.text.decoration === "underline" ? "underline" 
                        : todo.text.decoration === "line-through" ? "line-through"
                        : "none",
                    // fontSize : todo.font.size
                    }}
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
