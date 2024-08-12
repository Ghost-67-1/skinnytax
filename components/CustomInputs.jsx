'use client';
import React from 'react';
import ErrorMassage from './ErrorMassage';

function CustomInput({
  id,
  label,
  type = 'text',
  value,
  onChange,
  setFieldValue,
  placeholder,
  required = false,
  errorMessage = '',
  size,
  options = [],
  className,
  handleBlur,
  error,
  visible,
  ...rest
}) {
  return (
    <div className={className}>
      <div className={`form-group`}>
        {label && <label htmlFor={id}>{label}</label>}
        {type === 'radio' ? (
          <div className="main-wrapper">
            <div className="toogle-btn-wrapper active">
              <span className="text">Yes</span>
              <label className={`switch ${value === true ? 'active' : ''}`}>
                <input
                  id={`${id}-yes`}
                  type="checkbox"
                  value="yes"
                  onBlur={handleBlur}
                  checked={value === true}
                  className="form-control"
                  onChange={() => {
                    onChange({
                      target: {
                        name: id,
                        value: true
                      }
                    });
                  }}
                  {...rest}
                />
                <span class="slider round"></span>
              </label>
            </div>
            <div className="toogle-btn-wrapper active">
              <span className="text">No</span>
              <label className={`switch ${value === false ? 'active' : ''}`}>
                <input
                  id={`${id}-no`}
                  type="checkbox"
                  className="form-control"
                  value="no"
                  onBlur={handleBlur}
                  checked={value === false}
                  onChange={() => {
                    onChange({
                      target: {
                        name: id,
                        value: false
                      }
                    });
                  }}
                  {...rest}
                />
                <span class="slider round"></span>
              </label>
            </div>
            {options.length == 3 && (
              <div className="toogle-btn-wrapper">
                <span className="text">Other</span>
                <label
                  className={`switch ${value === 'other' ? 'active' : ''}`}
                >
                  <input
                    id={`${id}-other`}
                    type="checkbox"
                    value="other"
                    className="form-control"
                    onBlur={handleBlur}
                    checked={value === 'other'}
                    onChange={() => {
                      onChange({
                        target: {
                          name: id,
                          value: 'other'
                        }
                      });
                    }}
                    {...rest}
                  />
                  <span class="slider round"></span>
                </label>
              </div>
            )}
          </div>
        ) : (
          <input
            id={id}
            type={type}
            value={value}
            onChange={(e) =>
              onChange({
                target: {
                  name: id,
                  value: e.target.value
                }
              })
            }
            onBlur={handleBlur}
            placeholder={placeholder}
            required={required}
            {...rest}
            className="form-control"
          />
        )}
        {/* {errorMessage && <span className="error-message">{errorMessage}</span>} */}
        <ErrorMassage error={error} visible={visible} />
      </div>
    </div>
  );
}

export default CustomInput;
