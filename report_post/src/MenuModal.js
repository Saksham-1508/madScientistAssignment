import React, { useState } from 'react';
import Axios from 'axios';
import {toast} from 'react-toastify';
function MenuModal({ post_id, closeModal, setpostId }) {
    const [report, setReport] = useState(false)
    const [reason, setReason] = useState("")
    const reportPost = () =>{
        
        Axios.post('http://localhost:3001/reportpost',{post_id:post_id,reason:reason}).then(()=>{ 
            console.log("Post Reported");
            closeModal(false);
            setReport(false);
            toast('Post Reported');
        });
        
    }
  return (
      <div className='modal-background'>
        { !report ?
            <div className='modal-container'>
                <button style={{color:'red',fontWeight:'bold'}} onClick={()=>{setReport(true);}}>Report</button>
                <button style={{color:'red',fontWeight:'bold'}}>Unfollow</button>
                <button>Go to post</button>
                <button>Share to...</button>
                <button>Copy Link</button>
                <button>Embed</button>
                <button onClick={() => {
                    closeModal(false);
                    setpostId(-1);
                    }}>Cancel</button>
            </div>
            :
            <div className='modal-report'>
                <h3>Are you sure you want to report this post?</h3>
                <input onChange={event => setReason(event.target.value)} type="text" placeholder='Reason' style={{border:'none',borderBottom:'1px solid black',padding:'1em',focus:'none'}}/>
                <div className='report-buttons'>
                <button style={{color:'white',background:'red'}} onClick={reportPost}>Yes</button>
                <button style={{color:'white',background:'Blue'}} onClick={() => {closeModal(false);setReport(false)}}>Cancel</button>
                </div>
            </div>
        }
      </div>

  )
}

export default MenuModal