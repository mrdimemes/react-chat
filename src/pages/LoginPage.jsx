import React from 'react';

import { LoginForm } from '../components'
import '../styles/sass/pages/LoginPage.sass';


function LoginPage() {
  return (
    <div className='login-page'>
      
      <div className='login-page__wrapper'>

        <h1 className='login-page__label'>Sign in</h1>
        <p className='login-page__invite-text'>Please login to your account</p>

        <div className='login-page__form'>

          < LoginForm />

          <a className='login-page__redirect-link' href="/">
            Register now
          </a>
        </div>

      </div>

    </div>
  )
}

export default LoginPage;