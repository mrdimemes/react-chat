import React from 'react';

import { Chat, Contacts } from '../components';

import '../styles/sass/pages/ChatPage.sass';


function ChatPage() {
  return (
    <div className='chat-page'>
      <Chat />
      <Contacts />
    </div>
  )
}


export default ChatPage;