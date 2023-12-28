import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css"

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    
    //input = HTMLInputElement
    //button = HTMLParagraphElement
    //useRef에서 연결될 타입을 정해주고, 시작값을 설정해주어야 한다.
    //현재 시작값 null로 설정
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submiHandler = (event: React.FormEvent)=>{
        event.preventDefault();

        //?가 붙는 이유 = ref에 아직 값이 안들어갔을 수도 있기 때문.
        //null값이 아니라는 것을 확신한다면 !를 사용해줘도 된다. (절대 null이 아니라는 뜻)
        const enteredText = todoTextInputRef.current!.value;

        if(enteredText.trim().length===0){
            //TODO: thorow an error
            return;
        }

        todosCtx.addTodo(enteredText);
    }

    return(
        <form onSubmit={submiHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input type='text' id='text' ref={todoTextInputRef}/>
            <button>Add Todo</button>
        </form>
    )
};

export default NewTodo;
