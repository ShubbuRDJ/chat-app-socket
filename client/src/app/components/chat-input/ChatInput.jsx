import React, { useState } from 'react';
import './chat-input.scss';
import Picker from 'emoji-picker-react';
import { Send, EmojiEmotions } from '@mui/icons-material';

export default function ChatInput({handleSendMsg}) {
  const [showEmojiPicker, setshowEmojiPicker] = useState(false);
  const [msg, setMsg] = useState("");

  const handleShowHideEmojiPicker = ()=>{
    setshowEmojiPicker(!showEmojiPicker);
  }
  const handleEmojiClick = (emoji)=>{
    let message = msg.trim();
    if(emoji?.emoji !== '🫦'){
      message += emoji.emoji;
      setMsg(message);
    }
  }

  const sendChat = (event)=>{
    event.preventDefault();
    let message = msg.trim();
    if(message.length > 0){
      handleSendMsg(message);
      setMsg('');
    }
  }
  return (
    <div className='chat-input-container'>
      <div className="button-container">
        <div className="emoji">
          <EmojiEmotions onClick={handleShowHideEmojiPicker}/>
          {
            showEmojiPicker && <Picker height={'367px'} emojiStyle='apple' searchPlaceHolder='Search your emoji' onEmojiClick={(emoji)=>handleEmojiClick(emoji)}/>
          }
        </div>
      </div>

      <form className="input-container" onSubmit={(e)=>sendChat(e)}>
        <input type="text" name="message" id="message" placeholder='type your message here' value={msg} onChange={(e)=>setMsg(e.target.value)}/>
        <button type="submit" className='submit'>
          <Send/>
        </button>
      </form>
    </div>
  )
}
