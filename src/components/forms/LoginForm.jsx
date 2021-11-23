import React from 'react';
import classNames from 'classnames';


function LoginForm() {
  return (
    <form className='login-form form'>
      <input
        className={classNames(
          'login-form__email-field',
          'form__field',
          'form__email-field'
        )}
        type='email'
        name='login'
        placeholder='E-mail'
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
        value='Sign in'
      />
    </form>
  )
}

export default LoginForm;