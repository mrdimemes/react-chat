import React from 'react';

import { Massage } from './';

import '../../styles/sass/components/chat/MassageGallery.sass';


function MassageGallery() {
  return (
    <div className='chat__massage-gallery massage-gallery'>

      <Massage
        type='outgoing'
        children='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Proin maximus tempus risus non ultricies. Aliquam erat volutpat.
          Nulla elementum velit sed efficitur vehicula. Morbi velit lorem,
          imperdiet pellentesque est sed, dictum finibus nisl.'
        time='timestamp'
        autor='Brute'
      />

      <Massage
        type='incoming'
        children='Lorem ipsum dolor sit amet, consectetur'
        time='timestamp'
        autor='Caesar'
      />


      <Massage
        type='outgoing'
        children='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Proin maximus tempus risus non ultricies. Aliquam erat volutpat.
          Nulla elementum velit sed efficitur vehicula. Morbi velit lorem,
          imperdiet pellentesque est sed, dictum finibus nisl.'
        time='timestamp'
        autor='Brute'
      />

      <Massage
        type='outgoing'
        children='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Proin maximus tempus risus non ultricies. Aliquam erat volutpat.
          Nulla elementum velit sed efficitur vehicula. Morbi velit lorem,
          imperdiet pellentesque est sed, dictum finibus nisl.'
        time='timestamp'
        autor='Brute'
      />

    </div>
  )
}


export default MassageGallery;