import React from "react";
import Todo from "../models/todo";
import { useState } from "react";

type TodosContextObj={
    items:Todo[];
    addTodo:(text: string)=>void;
    removeTodo:(id:string)=>void;    
}


export const TodosContext = React.createContext<TodosContextObj>({
    items:[],
    addTodo: ()=>{},
    removeTodo: ()=>{}
});

const TodosContextProvider=(props: any)=>{
     //useState는 원래 제네릭 함수이다.
  //본인이 사용할 타입을 제네릭을 통해 설정해주면 됨.
  //해당 state로 관리될 것은 Todo 배열이라는 것을 명시
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const addTodoHandler= (todoText: string)=>{
    const newTodo = new Todo(todoText);
    
    setTodos((prevTodos)=>{
      return prevTodos.concat(newTodo);
    });
  }

  const removeTodoHandler=(todoId : string)=>{
      setTodos((prevTodos)=>{
        return prevTodos.filter(todo=>todo.id !== todoId);
      });
  }

  const contextValue:TodosContextObj = {
    items : todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  };

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider;