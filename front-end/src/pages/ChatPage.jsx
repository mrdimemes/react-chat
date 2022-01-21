import React from 'react';

import { Chat } from '../components';

function ChatPage() {
  return (
    <div className='chat-page'>
      <Chat />
      <div className='contacts'></div>
    </div>
  )
}


export default ChatPage;