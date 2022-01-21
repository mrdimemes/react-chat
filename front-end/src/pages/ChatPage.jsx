import React from 'react';

import { Chat } from '../components';

import '../styles/sass/pages/ChatPage.sass';


function ChatPage() {
  return (
    <div className='chat-page'>
      <Chat />
      <div className='contacts'></div>
    </div>
  )
}


export default ChatPage;