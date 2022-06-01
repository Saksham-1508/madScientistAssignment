import Post from './Post';
import "./App.css"
import {useState, useEffect} from 'react';
import Axios from "axios";
import MenuModal from './MenuModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [posts, setposts] = useState([]);
  const [postId, setpostId] = useState(-1)
  const [openModal, setOpenModal] = useState(false)
  const getPosts = () =>{
      Axios.get("http://localhost:3001/myposts").then((response)=>{
        setposts(response.data);
  })}

  useEffect(() => {
    getPosts();
  }, [])
  
  return (
    <>
    {openModal && <MenuModal post_id={postId} setpostId={setpostId} closeModal={setOpenModal}/>}
    <div className="container">
        {posts.map((element) => {
            return (
              <Post
                key={element.post_id}
                post = {element}
                setpostId = {setpostId}
                setOpenModal = {setOpenModal}
                />
            );
          })}  
      </div>
      <ToastContainer/>
      </>
  );
}

export default App;
