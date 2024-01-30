function TodoContainer({ todo, updateTodoFn, createTodoFn }) {
    return (
        <div className="todo-container flex items-center">
            <input
                type="checkbox"
                name="todo"
                data-id={todo.id}
                className=" invisible"
            />
            <textarea
                name="todo"
                id={todo.id}
                value={todo.todo}
                className=" border-b-2 border-gray-300 w-full resize-none h-8 pl-1
                            focus:outline-none"
                onChange={(e) => {
                    const id = e.target.id;
                    const todo = {
                        id: +id,
                        todo: e.target.value,
                    };
                    updateTodoFn(todo);

                    if (e.target.value !== "") {
                        const newTodo = { todo: "" };
                        createTodoFn(newTodo);
                    }
                }}
            ></textarea>
        </div>
    );
}

export default TodoContainer;
