import { useState } from "react";

import Post from "./Post";
import classes from "./PostsList.module.css"
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostsList(){
    const[modalIsVisible, setModalIsVisible] = useState(true);
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor]=useState('');
    // stateData[0] //현재값
    // stateData[1] //state 업데이트
    // 상태가 바뀔 때 마다 컴포넌트 함수가 재실행된다.
    function hideModlHandler(){
        setModalIsVisible(false);
    }


    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
    }

    // let modalContent;

    // if(modalIsVisible){
    //     modalContent =  <Modal onClose={hideModlHandler}>
    //     <NewPost 
    //         onBodyChange = {bodyChangeHandler} 
    //         onAuthorChange = {authorChangeHandler}
    //     />
    // </Modal>
    // }

    return(
    <>
            {modalIsVisible && (
             <Modal onClose={hideModlHandler}>
             <NewPost 
                 onBodyChange = {bodyChangeHandler} 
                 onAuthorChange = {authorChangeHandler}
             />
         </Modal>
         )}
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody}/>
                <Post author="wow" body="check this"/>
            </ul>
    </>
    );
}

export default PostsList;