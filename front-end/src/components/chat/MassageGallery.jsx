import React from 'react';

import '../../styles/sass/components/chat/MassageGallery.sass';


function MassageGallery() {
  return (
    <div className='chat__massage-gallery massage-gallery'>

      <div className='massage-gallery__massage massage massage_incoming'>
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

      <div className='massage-gallery__massage massage massage_incoming'>
        <div className='massage__photo'></div>
        <div className='massage__text massage__text_incoming'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className='massage__marker'></div>
        <div className='massage__time'></div>
      </div>

      <div className='massage-gallery__massage massage massage_incoming'>
        <div className='massage__photo'></div>
        <div className='massage__text massage__text_incoming'>
          Lorem ipsum
        </div>
        <div className='massage__marker'></div>
        <div className='massage__time'></div>
      </div>

      <div className='massage-gallery__massage massage massage_outgoing'>
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

      <div className='massage-gallery__massage massage massage_outgoing'>
        <div className='massage__photo'></div>
        <div className='massage__text massage__text_outgoing'>
          Lorem ipsum
        </div>
        <div className='massage__marker'></div>
        <div className='massage__time'></div>
      </div>
    </div>
  )
}


export default MassageGallery;