import React from "react";

import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css"

//타입을 정의함
//함수가 함수형 컴포넌트가 됨을 명확히한다.
const Todos:React.FC<{items:Todo[]; onRemoveTodo:(id:string)=>void}> =(props)=>{
    return(
    <ul className={classes.todos}>
        {props.items.map((item) => (
        <TodoItem 
        key={item.id} 
        text={item.text} 
        onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}/>
        ))}
    </ul>
    );
}

export default Todos;