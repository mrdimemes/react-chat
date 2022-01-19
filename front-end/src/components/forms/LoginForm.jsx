import React from 'react';

import { BaseForm } from './';


function LoginForm() {
  return (
    <BaseForm 
      className='login-form'
      submitButtonText='Sign in'
      fields={[
        ['email', 'login', 'E-mail'],
        ['password', 'password', 'Password']
      ]}
    />
  )
}

export default LoginForm;