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
  )
}

export default LoginForm;