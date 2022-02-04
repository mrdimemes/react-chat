import React from 'react';

import '../../styles/sass/components/contacts/Contact.sass';


function Contact() {
  return (
    <div className='contact'>
      <div className='contact__photo'>
        <div className='contact__online-marker'></div>
      </div>
      <div className='contact__body'>
        <h3 className='contact__name'>Jack the Ripper</h3>
        <p className='contact__preview'>Blablabla bla-bla blaaaaaaaaaaaa</p>
        <div className='contact__unreaded-income'>3</div>
        <div className='contact__outcome-status'></div>
        <div className='contact__time'>14:32</div>
      </div>
    </div>
  )
}

export default Contact;
