import React from 'react';

import classNames from 'classnames';

import { Contact } from './';


function ContactGallery({ className }) {
  return (
    <div className={classNames(
      'contact-gallery',
      className
    )}>
      <Contact 
        name='Jack'
        preview='Massage yo!'
        onlineStatus='online'
        unreadIncome={0}
        time='14:20'
        outcomeStatus='delivered'
      />
    </div>
  )
}


export default ContactGallery;
