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
                alignStyle: "",
                text: {
                    bold : false,
                    italic : false,
                    decoration : ""
                },
                font : {
                    size : 16,
                    color : "",
                    bgClr : ""
                },
                rows : 1,
                complated : false
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
        setReadonly(!readonly);
    };

    const updateCurrentId = async(id) => {
        console.log(id);
        await setCurrentId(id);
    };

    const handleCheckVisibilty = () => {
        const updatedTodoList = todos.todos.map((todoObj) => {
            if (todoObj.id == currentId && todoObj.listStyle === "") {
                return { ...todoObj, listStyle: "checkbox" };
            } else if (todoObj.id == currentId && todoObj.listStyle !== "") {
                return { ...todoObj, listStyle: "" };
            } else {
                return todoObj;
            }
        });
        setTodos((preState) => {
            return { ...preState, todos: updatedTodoList };
        });        
    };

    const setAlignLeft = () => {
        const updatedTodoList = todos.todos.map((todoObj) => {
            if (todoObj.id == currentId && todoObj.alignStyle !== "left") {
                return { ...todoObj, alignStyle: "left" };
            } else if (todoObj.id == currentId && todoObj.alignStyle === "left") {
                return { ...todoObj, alignStyle: "" };
            } else {
                return todoObj;
            }
        });
        setTodos((preState) => {
            return { ...preState, todos: updatedTodoList };
        });        
    };

    const setAlignCenter = () => {
        const updatedTodoList = todos.todos.map((todoObj) => {
            if (todoObj.id == currentId && todoObj.alignStyle !== "center") {
                return { ...todoObj, alignStyle: "center" };
            } else if (todoObj.id == currentId && todoObj.alignStyle === "center") {
                return { ...todoObj, alignStyle: "" };
            } else {
                return todoObj;
            }
        });
        setTodos((preState) => {
            return { ...preState, todos: updatedTodoList };
        });        
    };

    const setAlignRight = () => {
        const updatedTodoList = todos.todos.map((todoObj) => {
            if (todoObj.id == currentId && todoObj.alignStyle !== "right") {
                return { ...todoObj, alignStyle: "right" };
            } else if (todoObj.id == currentId && todoObj.alignStyle === "right") {
                return { ...todoObj, alignStyle: "" };
            } else {
                return todoObj;
            }
        });
        setTodos((preState) => {
            return { ...preState, todos: updatedTodoList };
        });        
    };

    const handleBold = () => {
            const updatedTodoList = todos.todos.map((todoObj) => {
                if (todoObj.id == currentId && todoObj.text.bold === false ) {
                    return { ...todoObj, text : {...todoObj.text, bold : true} };
                } else {
                    return { ...todoObj, text : {...todoObj.text, bold : false} };
                }
            });
            setTodos((preState) => {
                return { ...preState, todos: updatedTodoList };
            });            
    };

    const handleItalic = () => {
        const updatedTodoList = todos.todos.map((todoObj) => {
            if (todoObj.id == currentId && todoObj.text.italic === false ) {
                return { ...todoObj, text : {...todoObj.text, italic : true} };
            } else {
                return { ...todoObj, text : {...todoObj.text, italic : false} };
            }
        });
        setTodos((preState) => {
            return { ...preState, todos: updatedTodoList };
        });        
};

    const handleTextDecoration = (style) => {
        const updatedTodoList = todos.todos.map((todoObj) => {
            if (todoObj.id == currentId && todoObj.text.decoration !== style ) {
                return { ...todoObj, text : {...todoObj.text, decoration : style} };
            } else {
                return { ...todoObj, text : {...todoObj.text, decoration : "none"} };
            }
        });
        setTodos((preState) => {
            return { ...preState, todos: updatedTodoList };
        });        
    };

    const handleSelect = (value) => {        
        const updatedTodos = todos.todos.map((todoObj)=> {
            if (todoObj.id == currentId) {
                return {...todoObj, font :{...todoObj.font, size:+value}}
            }
            else {
                return todoObj
            }
        })
        setTodos(preState=> {
            return {...preState, todos:updatedTodos}
        } )
    }

    const handleColor = (value) => {        
        const updatedTodos = todos.todos.map((todoObj)=> {
            if (todoObj.id == currentId) {
                return {...todoObj, font :{...todoObj.font, color:value}}
            }
            else {
                return todoObj
            }
        })        
        setTodos(preState=> {
            return {...preState, todos:updatedTodos}
        } )
    }

    const handleBgClr = (value) => {        
        const updatedTodos = todos.todos.map((todoObj)=> {
            if (todoObj.id == currentId) {
                return {...todoObj, font :{...todoObj.font, bgClr:value}}
            }
            else {
                return todoObj
            }
        })        
        setTodos(preState=> {
            return {...preState, todos:updatedTodos}
        } )
    }

    const updateLineCount =(element) => {

            const lineHeight = parseInt(window.getComputedStyle(element).lineHeight);
          const lines = Math.floor(element.scrollHeight / lineHeight);
 
          const updatedTodos = todos.todos.map((todoObj)=> {
             if(todoObj.id == currentId ) {

                return todoObj.rows = lines
             }else{
                return todoObj
             }

            })
            setTodos(preState=> {
                return {...preState, todos:updatedTodos}
            } )
        }


    const handleComplated = () => {
        const updatedTodos = todos.todos.map(todoObj=>{

            if(todoObj.id == currentId) {
                console.log(todoObj);

                return { ...todoObj, complated:!todoObj.complated}
            }
            else{
                return todoObj
            }
        })

        setTodos(preState=>{
            return {...todos, todos:updatedTodos}
        })
    }



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
                updateLineCount={updateLineCount}
                handleComplated={handleComplated}
            />
            <Footer
                handleCheckVisibilty={handleCheckVisibilty}
                setAlignLeft={setAlignLeft}
                setAlignCenter={setAlignCenter}
                setAlignRight={setAlignRight}
                handleBold={handleBold}
                handleItalic={handleItalic}
                handleTextDecoration={handleTextDecoration}
                handleSelect={handleSelect}
                handleColor={handleColor}
                handleBgClr={handleBgClr}
            />
        </div>
    );
}

export default App;
