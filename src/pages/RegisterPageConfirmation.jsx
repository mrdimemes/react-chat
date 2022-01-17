import React from 'react';

import { BaseFormPage } from './';
import { RegisterConfirmation } from '../components';


function RegisterPageConfirmation() {
  return (
    <BaseFormPage
      className='register-page'
      label='Registration'
      inviteText='To enter the chat, you need to register'
      form={ <RegisterConfirmation /> }
    />
  )
}


export default RegisterPageConfirmation;