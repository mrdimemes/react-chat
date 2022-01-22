import React from 'react';

import { MassageGallery } from './';

import '../styles/sass/components/Chat.sass';


function Chat() {
  return (
    <div className='chat'>
      <div className='chat__header'>
        <div className='chat__header-name'>Caesar</div>
        <div className='chat__header-status'>
          <div className='chat__header-status-marker status-marker status-marker_online'></div>
          <div className='chat__header-status-text'>online</div>
        </div>
        <div className='chat__header-popup-icon'></div>
        <div className='chat__header-popup'></div>
      </div>

      <MassageGallery />
      <form className='chat__input'>
        <input className='chat__input-text' type='text' placeholder='Enter massage...'/>
        <input className='chat__input-submit' type='submit' />
      </form>

      
    </div>
  )
}


export default Chat;