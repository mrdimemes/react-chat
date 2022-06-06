import React from 'react';

import { ContactSearch } from './';
import { ContactGallery } from './';

import '../../styles/sass/components/contacts/Contacts.sass';


function Contacts() {
  return (
    <div className='contacts'>
      <div className='contacts__header'>
        <div className='contacts__popup'>
          <div className='contacts__popup-icon'>
            <img src={ "11" } alt='contacts' />
          </div>
          <div className='contacts__popup-text'>Contacts</div>
        </div>
        <div className='contacts__new-chat'>
          <img src={ "newChatPng" } alt='new chat' />
        </div>
      </div>
      <div className='contacts__search'>
        <ContactSearch />
      </div>
      <ContactGallery 
        className={'contacts__gallery'}
      />
    </div>
  )
}


export default Contacts;