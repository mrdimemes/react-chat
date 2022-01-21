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

        <div className='chat__massage-gallery massage-gallery'>

          <div className='massage-gallery massage massage_incoming'>
            <div className='massage__photo'></div>
            <div className='massage__text massage__text_incoming'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Proin maximus tempus risus non ultricies. Aliquam erat volutpat.
              Nulla elementum velit sed efficitur vehicula. Morbi velit lorem,
              imperdiet pellentesque est sed, dictum finibus nisl.
            </div>
            <div className='massage__marker'></div>
            <div className='massage__time'></div>
          </div>

          <div className='massage-gallery massage massage_incoming'>
            <div className='massage__photo'></div>
            <div className='massage__text massage__text_incoming'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className='massage__marker'></div>
            <div className='massage__time'></div>
          </div>

          <div className='massage-gallery massage massage_incoming'>
            <div className='massage__photo'></div>
            <div className='massage__text massage__text_incoming'>
              Lorem ipsum
            </div>
            <div className='massage__marker'></div>
            <div className='massage__time'></div>
          </div>

          <div className='massage-gallery massage massage_outgoing'>
            <div className='massage__photo'></div>
            <div className='massage__text massage__text_outgoing'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Proin maximus tempus risus non ultricies. Aliquam erat volutpat.
              Nulla elementum velit sed efficitur vehicula. Morbi velit lorem,
              imperdiet pellentesque est sed, dictum finibus nisl.
            </div>
            <div className='massage__marker'></div>
            <div className='massage__time'></div>
          </div>

          <div className='massage-gallery massage massage_outgoing'>
            <div className='massage__photo'></div>
            <div className='massage__text massage__text_outgoing'>
              Lorem ipsum
            </div>
            <div className='massage__marker'></div>
            <div className='massage__time'></div>
          </div>

        </div>
        <form className='chat__input'>
          <input className='chat__input-text' type='text' />
          <input className='chat__input-submit' type='submit' />
        </form>

      </div>


      <div className='contacts'></div>
    </div>
  )
}


export default ChatPage;