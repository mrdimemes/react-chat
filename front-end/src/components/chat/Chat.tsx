import React from 'react';

import { MassageGallery } from './';

import '../../styles/sass/components/chat/Chat.sass';



function Chat() {
  return (
    <div className='chat'>
      <div className='chat__header'>
        <div className='chat__header-name'>Caesar</div>
        <div className='chat__header-status'>
          <div className='chat__header-status-marker status-marker status-marker_online'></div>
          <div className='chat__header-status-text'>online</div>
        </div>
        <div className='chat__header-popup-icon'><span/></div>
        <div className='chat__header-popup'></div>
      </div>

      <MassageGallery />

      <div className='chat__input'>
        <div
          className='chat__input-text'
          role="textbox"
          placeholder='Enter massage...'
          contentEditable='true'
        />
        <div className='chat__input-send-button' >
          <img
            className='chat__input-send-button-img'
            src={ "1" }
            alt='send'
          />
        </div>
      </div>

      
    </div>
  )
}


export default Chat;