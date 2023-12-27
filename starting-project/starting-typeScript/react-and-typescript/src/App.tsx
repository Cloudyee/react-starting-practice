import './App.css'
import Todos from './components/Todos'
import Todo from './models/todo'

function App() {
  const todos=[
    new Todo('리액트 공부하기'),
    new Todo('타입스크립트 공부하기')
  ];
  
  return (
    <>
      <div>
        하이하이요 화이팅
        <Todos items={todos}/>
      </div>
    </>
  );
}

export default App
