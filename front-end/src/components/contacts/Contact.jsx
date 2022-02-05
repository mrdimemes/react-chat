import React from 'react';

import classNames from 'classnames';

import '../../styles/sass/components/contacts/Contact.sass';


function Contact({ 
  name, preview, unreadIncome, time, onlineStatus, outcomeStatus 
}) {
  return (
    <div className='contact'>
      <div className='contact__photo'>
        <div className={classNames(
          'contact__online-marker',
          {[`contact__online-marker_${onlineStatus}`]: onlineStatus}
        )} />
      </div>
      <div className='contact__body'>
        <h3 className='contact__name'>{ name }</h3>
        <p className='contact__preview'>{ preview }</p>
        <div className={classNames(
          'contact__unreaded-income',
          {'contact__unreaded-income_showed': unreadIncome}
        )}>
          { unreadIncome }
        </div>
        <div className={classNames(
          'contact__outcome-status',
          {[`contact__outcome-status_${outcomeStatus}`]: outcomeStatus}
        )} >
          <span />
        </div>
        <div className='contact__time'>{ time }</div>
      </div>
    </div>
  )
}

export default Contact;
