import React from 'react';

import classNames from 'classnames';

import { Contact } from './';


function ContactGallery({ className }) {
  return (
    <div className={classNames(
      'contact-gallery',
      className
    )}>
      <Contact />
    </div>
  )
}


export default ContactGallery;
