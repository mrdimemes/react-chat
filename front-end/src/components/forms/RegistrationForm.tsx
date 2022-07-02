import React from 'react';

import { BaseForm } from './';


function RegistrationForm() {
  return (
    <BaseForm 
      className='register-form'
      submitButtonText='Sign up'
      fields={[
        ['email', 'login', 'E-mail'],
        ['text', 'name', 'Your name'],
        ['password', 'password', 'Password'],
        ['password', 'repeat-password', 'Repeat password']
      ]}
    />
  )
}

export default RegistrationForm;