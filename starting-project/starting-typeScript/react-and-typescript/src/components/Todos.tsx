import React from "react";

import Todo from "../models/todo";
import TodoItem from "./TodoItem";

//타입을 정의함
//함수가 함수형 컴포넌트가 됨을 명확히한다.
const Todos:React.FC<{items:Todo[]}> =(props)=>{
    return(
    <ul>
        {props.items.map((item) => <TodoItem key={item.id} text={item.text}/>)}
    </ul>
    );
}

export default Todos;