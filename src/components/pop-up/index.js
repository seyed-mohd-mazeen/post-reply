import { useState } from 'react';
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './style.css';
  
const PopupGfg = () => {

  const [reply, setReply] = useState("")

  return(
  <div className='reply'>
    <Popup trigger={<button><i className="fa-solid fa-reply"></i> Reply </button>} 
     position="right center">
      <div>
        <input type='text' placeholder='Reply' onChange={(e) => setReply(e.target.value)}/>
        <input type='text' placeholder='Username'/>
      </div>
      <button>Reply</button>
    </Popup>
  </div>
  )
};
export default PopupGfg;