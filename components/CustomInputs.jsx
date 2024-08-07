'use client'
import React from 'react';

function CustomInput({
    id, label, type = 'text', value, onChange, placeholder, required = false, errorMessage = '', size, options = [], ...rest
}) {
    return (
        <div className={`input-container input-${size}`}>
            {label && <label htmlFor={id}>{label}</label>}
            {type === 'radio' ? (
                options.map((option) => (
                    <label key={option.value}>
                        <input
                            id={id}
                            type="radio"
                            name={id}
                            value={option.value}
                            checked={value === option.value}
                            onChange={onChange}
                            required={required}
                            className={`input-${size}`}
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
                />
            )}
            {errorMessage && <span className="error-message">{errorMessage}</span>}
        </div>
    );
}

export default CustomInput;
