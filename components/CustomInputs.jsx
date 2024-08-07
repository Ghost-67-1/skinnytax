'use client'
import React from 'react';

function CustomInput({
    id, label, type = 'text', value, onChange, placeholder, required = false, errorMessage = '', size, options = [], ...rest
}) {
    return (
        <div className={`input-${size} form-group` }>
            {label && <label htmlFor={id}>{label}</label>}

            {type === 'checkbox' ? (
                
                options.map((option) => (
                    <label key={option.value}>
                        <input
                            id={id}
                            type="checkbox"
                            name={id}
                            value={option.value}
                            checked={value === option.value}
                            onChange={onChange}
                            required={required}
                            className={`input-${size} form-control`}
                            {...rest}
                        />
                        {option.label}
                    </label>
                ))
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
    );
}

export default CustomInput;
