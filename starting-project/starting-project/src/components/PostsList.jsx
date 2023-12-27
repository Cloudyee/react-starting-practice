import { useState } from "react";

import Post from "./Post";
import classes from "./PostsList.module.css"
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostsList({isPosting, onStopPosting}){
    const [posts, setPosts]=useState([]);

    function addPostHandelr(postData){
        setPosts((exstingPosts)=>[postData, ...exstingPosts]); //기존의 데이터를 유지하며 새로운 포스트를 갱신
    }

    return(
    <>
            {isPosting && (
             <Modal onClose={onStopPosting}>
             <NewPost 
                 onCancel={onStopPosting}
                 onAddPost={addPostHandelr}
             />
         </Modal>
         )}
         {posts.length>0&&(
            <ul className={classes.posts}>
                {posts.map((post)=><Post key={post.body} author={post.author} body={post.body}/>)}
            </ul>
         )}
         {posts.length === 0 && (<div style={{textAlignLast:'center', color:'white'}}>
            <h2>There are no posts yet!</h2>
            <p>Please Enter the posts</p>
            </div>
            )}
    </>
    );
}

export default PostsList;