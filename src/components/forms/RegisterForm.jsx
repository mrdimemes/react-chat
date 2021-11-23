import React from 'react';
import classNames from 'classnames';


function RegisterForm() {
  return (
    <form className='register-form form'>
      <input
        className={classNames(
          'register-form__email-field',
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
          'register-form__name-field',
          'form__field',
          'form__text-field'
        )}
        type='text'
        name='name'
        placeholder='Your name'
        required
      />

      <input
        className={classNames(
          'register-form__password-field',
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
          'register-form__repeat-password-field',
          'form__field',
          'form__password-field'
        )}
        type='password'
        name='repeat-password'
        placeholder='Repeat password'
        required
      />

      <input
        className={classNames(
          'register-form__submit',
          'form__submit',
        )}
        type='submit'
        value='Sign up'
      />
    </form>
  )
}

export default RegisterForm;