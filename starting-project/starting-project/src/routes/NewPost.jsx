import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import { Link, Form, redirect } from 'react-router-dom';

function NewPost() {
  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3}/>
        </p>

        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" name="author" id="name" required />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">Cancel</Link>
          <button >Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}){
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); //{body:'...', author : '..'}
    await fetch('http://localhost:8080/posts',{
      method : 'POST',
      body: JSON.stringify(postData), //stringify(): 데이터가 JSON 포맷으로 바뀜
      headers:{
          'Content-Type' : 'application/json'      //Content-Type에 따라 데이터를 받는 측에서는 데이터를 어떻게 처리해야 할 지 판단
      }
  }); //브라우저에서 제공, HTTP요청을 보낼 때 사용한다.

  return redirect('/'); //동작 후 다른 라우트를 로드하게 만든다.
  //현재 '/'경로의 라우트는 Posts 페이지!
  //이러한 동작은 백엔드와 아무런 관련이 없다.
}