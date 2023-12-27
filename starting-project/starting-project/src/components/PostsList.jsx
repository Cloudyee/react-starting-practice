import { useState, useEffect } from "react";

import Post from "./Post";
import classes from "./PostsList.module.css"

function PostsList(){ 

    const [posts, setPosts]=useState([]);
    const [isFetching, setIsFetching] = useState(false);

    //두가지 인자로 함수와 배열을 넘겨야한다.
    //배열에는 의존성을 설정한다.
    useEffect(()=>{
        async function fetchPosts(){
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts');
            const resData = await response.json();
            setPosts(resData.posts);
            setIsFetching(false);
        }

        fetchPosts();
    },[]);

    function addPostHandelr(postData){
        fetch('http://localhost:8080/posts',{
            method : 'POST',
            body: JSON.stringify(postData), //stringify(): 데이터가 JSON 포맷으로 바뀜
            headers:{
                'Content-Type' : 'application/json'      //Content-Type에 따라 데이터를 받는 측에서는 데이터를 어떻게 처리해야 할 지 판단
            }
        }); //브라우저에서 제공, HTTP요청을 보낼 때 사용한다.
        setPosts((exstingPosts)=>[postData, ...exstingPosts]); //기존의 데이터를 유지하며 새로운 포스트를 갱신
    }

    return(
    <>
         {!isFetching&& posts.length>0 &&(
            <ul className={classes.posts}>
                {posts.map((post)=><Post key={post.body} author={post.author} body={post.body}/>)}
            </ul>
         )}
            {isFetching && (<div style={{textAlign : 'center', color : 'white'}}>
                <p>Loading posts....</p>
            </div>)}
         {!isFetching&& posts.length === 0 && (<div style={{textAlignLast:'center', color:'white'}}>
            <h2>There are no posts yet.</h2>
            <p>Please adding some!</p>
            </div>
            )}
    </>
    );
}

export default PostsList;