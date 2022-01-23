import React from 'react';

import classNames from 'classnames';


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
      </div>
      <div className='massage__marker'></div>
      <div className='massage__autor'>{ autor }</div>
      <div className='massage__time'>{ time }</div>
    </div>
  )
}


export default Massage;