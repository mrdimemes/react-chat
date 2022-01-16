import React from 'react';

import classNames from 'classnames';


// The base component for form pages, such as the login or registration page.


function BaseFormPage(
  label, inviteText, form, redirectText, redirectUrl, className
) {

  return (
    <div className='form-page'>
      <div className={classNames(
        'form-page__wrapper',
        { [`${className}__wrapper`]: className }
      )}>

        <h1 className={classNames(
          'form-page__label',
          { [`${className}__label`]: className }
        )}>
          {label}
        </h1>

        <p className={classNames(
          'form-page__invite-text',
          { [`${className}__invite-text`]: className })
        }>
          {inviteText}
        </p>

        <div className={classNames(
          'form-page__form',
          { [`${className}__form`]: className })
        }>
          {form}
          <a className={classNames(
            'form-page__redirect-link',
            { [`${className}__redirect-link`]: className }
          )} href={redirectUrl}>
            {redirectText}
          </a>
        </div>

      </div>

    </div>
  );
}

export default BaseFormPage;