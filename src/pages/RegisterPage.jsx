import React from 'react';

import { BaseFormPage } from './';
import { RegisterForm } from '../components';

import '../styles/sass/pages/RegisterPage.sass';


function RegisterPage() {
  return (
    <BaseFormPage
      className='register-page'
      label='Registration'
      inviteText='To enter the chat, you need to register'
      redirectText='Sign in to your account'
      redirectUrl='/'
      form={ <RegisterForm /> }
    />
  )
}


export default RegisterPage;