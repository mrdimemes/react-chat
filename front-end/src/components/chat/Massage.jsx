import React from 'react';

import classNames from 'classnames';

import '../../styles/sass/components/chat/Massage.sass';


function Massage({ type, autor, time, children }) {
  return (
    <div className={classNames(
      'massage-gallery__massage',
      'massage',
      {[`massage_${type}`] : type }
    )} >
      <div className='massage__photo'></div>
      <div className={classNames(
        'massage__text',
        {[`massage__text_${type}`] : type }
      )} >
        { children }
        <div className={classNames(
          'massage__meta',
          {[`massage__meta_${type}`] : type }
        )}>
          <div className='massage__autor'>{ autor }</div>
          <div className='massage__time'>{ time }</div>
        </div>
      </div>
      <div className='massage__marker'></div>

    </div>
  )
}


export default Massage;