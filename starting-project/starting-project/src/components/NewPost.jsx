import {useState} from 'react'
import classes from './NewPost.module.css';

function NewPost({onCancel, onAddPost}) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor]=useState('');
  // stateData[0] //현재값
  // stateData[1] //state 업데이트
  // 상태가 바뀔 때 마다 컴포넌트 함수가 재실행된다.


  function bodyChangeHandler(event){
      setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event){
      setEnteredAuthor(event.target.value);
  }

  function submitHandler(event){
      event.preventDefault();
      const postData = {
        body:enteredBody,
        author:enteredAuthor
      };
      onAddPost(postData);
      onCancel();
      console.log(postData);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
      </p>

      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler}/>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button >Submit</button>
      </p>
    </form>
  );
}

export default NewPost;