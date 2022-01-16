import React from 'react';

import { BaseFormPage } from './';
import { LoginForm } from '../components';


function LoginPage() {
  return (
    <BaseFormPage
      className='login-page'
      label='Sign in'
      inviteText='Please login to your account'
      redirectText='Register now'
      redirectUrl='/'
      form={ <LoginForm /> }
    />
  )
}

export default LoginPage;