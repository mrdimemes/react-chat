import React from 'react';
import classNames from 'classnames';

type BaseFormProps = {
  className: string;
  fields: string[][];
  submitButtonText: string;
}

function BaseForm({ className, fields, submitButtonText = 'submit' }: BaseFormProps) {
  return (
    <form className={classNames('form', { className })}>

      {
        fields.map(([fieldType, fieldName, fieldPlaceholder], index) => {
          return (
            <input
              key={`${fieldName}-${index}`}
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