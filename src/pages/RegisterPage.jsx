import React from 'react';

import { RegisterForm } from '../components'
import '../styles/sass/pages/RegisterPage.sass';


function RegisterPage() {
  return (
    <div className='register-page'>
      <div className='register-page__wrapper'>

        <h1 className='register-page__label'>Registration</h1>
        <p className='register-page__invite-text'>To enter the chat, you need to register</p>

        <div className='register-page__form'>
          < RegisterForm />
          <a className='register-page__redirect-link' href="/">
            Sign in to your account
          </a>
        </div>

      </div>
    </div>
  )
}

export default RegisterPage;