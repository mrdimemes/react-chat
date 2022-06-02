import React from 'react';
import classNames from 'classnames';
import '../../styles/sass/pages/BaseFormPage.sass';

type FormPageProps = {
  label: string;
  inviteText: string;
  form: JSX.Element;
  redirectText?: string;
  redirectUrl?: string;
  className: string;
}

const BaseFormPage = (
  { label, inviteText, form, redirectText, redirectUrl, className }: FormPageProps
) => {
  return (
    <div className={classNames('form-page', className)} >
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