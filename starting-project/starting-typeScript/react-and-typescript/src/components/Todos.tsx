import React,{useContext} from "react";

import TodoItem from "./TodoItem";
import classes from "./Todos.module.css"
import { TodosContext } from "../store/todos-context";

//타입을 정의함
//함수가 함수형 컴포넌트가 됨을 명확히한다.
const Todos:React.FC =()=>{
    const todosCtx = useContext(TodosContext);
    
    return(
    <ul className={classes.todos}>
        {todosCtx.items.map((item) => (
        <TodoItem 
        key={item.id} 
        text={item.text} 
        onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}/>
        ))}
    </ul>
    );
}

export default Todos;