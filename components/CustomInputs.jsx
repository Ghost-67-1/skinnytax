'use client'
import React from 'react';

function CustomInput({
    id, label, type = 'text', value, onChange, placeholder, required = false, errorMessage = '', size, options = [], className, ...rest
}) {
    return (
        <div className={className}>
            <div className={`form-group`}>
                {label && <label htmlFor={id}>{label}</label>}
                {type === 'radio' ? (
                    <div className="main-wrapper">
                        {options.map((option) => (
                            <div className="toogle-btn-wrapper active">
                                <span className='text'>
                                    {option.label}
                                </span>
                                <label key={option.value} className='switch'>
                                    <input
                                        id={id}
                                        type="checkbox"
                                        name={id}
                                        value={option.value}
                                        checked={value === option.value}
                                        onChange={onChange}
                                        // required={required}
                                        className={`form-control`}
                                        {...rest}
                                    />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        ))}
                    </div>
                ) : (
                    <input
                        id={id}
                        type={type}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        required={required}
                        {...rest}
                        className='form-control'
                    />
                )}
                {errorMessage && <span className="error-message">{errorMessage}</span>}
            </div>
        </div>
    );
}

export default CustomInput;
