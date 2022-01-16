import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';


// The base form component. Renders an html form with an arbitrary number of
// required fields and a submit button.

// Component props:

// className: string - extended component class name;
// fields: array of arrays of the form
//     [fieldType, fieldName, fieldPlaceholder], where:
//         fieldType: string - input type and part of additional class;
//         fieldName: string - input name;
//         fieldPlaceholder: string - input placeholder;
// submitButtonText: string.


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


BaseForm.defaultProps = {
  submitButtonText: 'submit'
}

BaseForm.propTypes = {
  className: PropTypes.string,
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  submitButtonText: PropTypes.string,
}


export default BaseForm;