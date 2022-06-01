import React from 'react'
import "./App.css";

function Post(props) {
  const post = props.post;
  const setOpenModal = props.setOpenModal;
  const setpostId = props.setpostId;
  return (  
      <div className='Post-card'>
            <header>

              <div className="Post-user">
                <div className="Post-user-profilepicture">
                  <img src="https://i.pinimg.com/736x/aa/ab/5b/aaab5b13d453b6e4d97b215ab7df7f47--itachi-akatsuki-naruto-uzumaki.jpg" alt="" />
                </div>

                <div className="Post-user-nickname">
                  <span>{post.username}</span>
                </div>

                <div className="gap"></div>

                <button className="Post-menu" onClick={() => {
                  setOpenModal(true);
                  setpostId(post.post_id);
                }}>
                    <span className='menu-dot'></span>
                    <span className='menu-dot'></span>
                    <span className='menu-dot'></span>
                </button>
              </div>

            </header>

            <div className="Post-image">
              <div className="Post-image-bg">
                <img alt="Icon Living" src={`${post.post_url}`} />
              </div>
            </div>

            <div className="icons">
              <i className="fa-regular fa-heart fa-lg"></i>
              <i className="fa-regular fa-comment fa-lg"></i>
              <i className="fa-regular fa-paper-plane fa-lg"></i>
              <div className="gap"></div>
              <i className="fa-regular fa-bookmark fa-lg"></i>
            </div>

            <div className="Post-caption">
              <strong>{post.username}</strong> {post.caption}
            </div>
      </div>
  )
}

export default Post