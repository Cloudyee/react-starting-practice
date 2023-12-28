import { useState } from 'react';

import './App.css'
import NewTodo from './components/NewTodo';
import Todos from './components/Todos'
import Todo from './models/todo'

function App() {
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

  const onRemoveTodoHandler=(todoId : string)=>{
      setTodos((prevTodos)=>{
        return prevTodos.filter(todo=>todo.id !== todoId);
      });
  }

  return (
    <>
      <div>
        <NewTodo onAddTodo={addTodoHandler}/>
        <Todos items={todos} onRemoveTodo={onRemoveTodoHandler}/>
      </div>
    </>
  );
}

export default App
