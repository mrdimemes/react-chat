import React from 'react';

import '../styles/sass/pages/LoginPage.sass';


function LoginPage() {
  return (
    <div className='login-page'>
      <h1 className='login-page__label'>Sign in</h1>
      <p className='login-page__invite-text'>Please login to your account</p>
    </div>
  )
}

export default LoginPage;