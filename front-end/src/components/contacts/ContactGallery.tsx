import React from 'react';

import classNames from 'classnames';

import { Contact } from './';

import '../../styles/sass/components/contacts/ContactGallery.sass';

type ContactGalleryProps = {
  className: string;
}

function ContactGallery({ className }: ContactGalleryProps) {
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

      <Contact
        name='Mike the Mime'
        preview='Hi'
        unreadIncome={0}
        time='14:24'
        outcomeStatus='readed'
      />

      <Contact
        name='Mike the Mime'
        preview='Hi'
        unreadIncome={0}
        time='14:24'
        outcomeStatus='readed'
      />

      <Contact
        name='Mike the Mime'
        preview='Hi'
        unreadIncome={0}
        time='14:24'
        outcomeStatus='readed'
      />

      <Contact
        name='Mike the Mime'
        preview='Hi'
        unreadIncome={0}
        time='14:24'
        outcomeStatus='readed'
      />

      <Contact
        name='Mike the Mime'
        preview='Hi'
        unreadIncome={0}
        time='14:24'
        outcomeStatus='readed'
      />

      <Contact
        name='Mike the Mime'
        preview='Hi'
        unreadIncome={0}
        time='14:24'
        outcomeStatus='readed'
      />

      <Contact
        name='Mike the Mime'
        preview='Hi'
        unreadIncome={0}
        time='14:24'
        outcomeStatus='readed'
      />

      <Contact
        name='Mike the Mime'
        preview='Hi'
        unreadIncome={0}
        time='14:24'
        outcomeStatus='readed'
      />

      <Contact
        name='Mike the Mime'
        preview='Hi'
        unreadIncome={0}
        time='14:24'
        outcomeStatus='readed'
      />

      <Contact
        name='Mike the Mime'
        preview='Hi'
        unreadIncome={0}
        time='14:24'
        outcomeStatus='readed'
      />

      <Contact
        name='Mike the Mime'
        preview='Hi'
        unreadIncome={0}
        time='14:24'
        outcomeStatus='readed'
      />
    </div>
  )
}


export default ContactGallery;
