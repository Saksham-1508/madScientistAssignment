import React from 'react'
import "./App.css";
function Post() {
  return (
      <div className='Post-card'>
            <header>

              <div className="Post-user">
                <div className="Post-user-profilepicture">
                  <img src="https://i.pinimg.com/736x/aa/ab/5b/aaab5b13d453b6e4d97b215ab7df7f47--itachi-akatsuki-naruto-uzumaki.jpg" alt="John D. Veloper" />
                </div>

                <div className="Post-user-nickname">
                  <span>Itachi_Uchiha</span>
                </div>

                <div className="gap"></div>

                <div className="Post-menu">
                    <span className='menu-dot'></span>
                    <span className='menu-dot'></span>
                    <span className='menu-dot'></span>
                </div>
              </div>

            </header>

            <div className="Post-image">
              <div className="Post-image-bg">
                <img alt="Icon Living" src="https://static.marriedgames.com.br/82bae879-naruto-classico-e-naruto-shippuden-fillers.jpg" />
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
              <strong>Itachi_Uchiha</strong> Visit to konoha!
            </div>
      </div>

  )
}

export default Post