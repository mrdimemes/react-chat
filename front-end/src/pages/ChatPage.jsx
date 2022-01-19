import React from 'react';


function ChatPage() {
  return (
    <div className='chat-page'>
      <div className='chat'>
        <div className='chat__header'>
          <div className='chat__header-name'>Caesar</div>
          <div className='chat__header-status'>
            <div className='chat__header-status-marker status-marker status-online'></div>
            <div className='chat__header-status-text'>online</div>
          </div>
          <div className='chat__header-popup'></div>
        </div>

        <div className='chat__massage-gallery massage-gallery'></div>
        <div className='chat__input-bar'></div>

      </div>


      <div className='contacts'></div>
    </div>
  )
}


export default ChatPage;