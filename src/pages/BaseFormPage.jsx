import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';


// The base component for form pages, such as the login or registration page.

// Component props:

// label: string - page title content;
// inviteText: string - form explanation;
// form: React html form component. Required;
// redirectText: string - the text of the optional redirect link
//     below the form
// redirectUrl: string - the URL of the optional redirect link
//     below the form
// className: string - extended component class name.


function BaseFormPage({
  label, inviteText, form, redirectText, redirectUrl, className
}) {

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
          <>{form}</>
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


BaseFormPage.propTypes = {
  label: PropTypes.string,
  inviteText: PropTypes.string,
  form: PropTypes.element.isRequired,
  redirectText: PropTypes.string,
  redirectUrl: PropTypes.string,
  className: PropTypes.string
}


export default BaseFormPage;