import React from 'react';

import '../../styles/sass/components/forms/RegisterConfirmation.sass';


function RegisterConfirmation() {
  return (
    <div className='register-confirmation'>
      <div className='register-confirmation__icon'>i</div>
      <h2 className='register-confirmation__header'>Verify your account</h2>
      <p className='register-confirmation__text'>
        An email has been sent to your email address
        with a link to verify your account.
      </p>
    </div>
  )
}

export default RegisterConfirmation;

