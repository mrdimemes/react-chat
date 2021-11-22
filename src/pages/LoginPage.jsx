import React from 'react';
import classNames from 'classnames';

import '../styles/sass/pages/LoginPage.sass';


function LoginPage() {
  return (
    <div className='login-page'>
      
      <div className='login-page__wrapper'>

        <h1 className='login-page__label'>Sign in</h1>
        <p className='login-page__invite-text'>Please login to your account</p>

        <form className='login-form form'>
          <input
            className={classNames(
              'login-form__email-field',
              'form__field',
              'form__email-field'
            )}
            type='email'
            name='login'
            placeholder='Your email'
            required
          />
          <input
            className={classNames(
              'login-form__password-field',
              'form__field',
              'form__password-field'
            )}
            type='password'
            name='password'
            placeholder='Password'
            required
          />
          <input
            className={classNames(
              'login-form__submit',
              'form__submit',
            )}
            type='submit'
          />
        </form>

        <a className='login-form__redirect-link' href="/">
          Register now
        </a>
      
      </div>

    </div>
  )
}

export default LoginPage;