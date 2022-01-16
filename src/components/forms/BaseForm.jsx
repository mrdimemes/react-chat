import React from 'react';
import classNames from 'classnames';


function BaseForm({ className, fields, submitButtonText }) {
  return (
    <form className={classNames('form', { className })}>

      {
        fields.map((fieldType, fieldName, fieldPlaceholder) => {
          return (
            <input
              className={classNames(
                'form__field',
                `form__${fieldType}-field`,
                { [`${className}__${fieldType}-field`]: className }
              )}
              type={fieldType}
              name={fieldName}
              placeholder={fieldPlaceholder}
            />
          )
        })
      }

      <input
        className={classNames(
          'form__submit',
          { [`${className}__submit`]: className }
        )}
        type='submit'
        value={submitButtonText}
      />

    </form>
  )
}

export default BaseForm;