import PostsList from "../components/PostsList";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function Posts() {
  const[modalIsVisible, setModalIsVisible] = useState(false);

  return (
  <>
    <Outlet />
    <main>
      <PostsList />
    </main>
  </>
  );
}

export default Posts;
