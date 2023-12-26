import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  const[modalIsVisible, setModalIsVisible] = useState(true);

  function showModalHandler(){
    setModalIsVisible(true);
  }
  function hideModlHandler(){
    setModalIsVisible(false);
}

  return (
  <>
    <MainHeader />
    <main>
      <PostsList />
    </main>
  </>
  );
}

export default App;
