'use client';
import React, { useEffect, useState } from 'react';
import ErrorMassage from '../ErrorMassage';

export default function FormTable({
  data,
  handleChange = () => {},
  touched,
  errors,
  handleBlur,
}) {
  console.log('🚀 ~ FormTable ~ data:', data);
  return (
    <div className="Form-table mb-5">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Stock</th>
              <th>Ownership</th>
              <th>Shares</th>
              <th>Approx. Value</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="text"
                    onBlur={handleBlur}
                    name="stock"
                    value={item.stock}
                    onChange={(e) =>
                      handleChange(e.target.value, index, e.target.name)
                    }
                  />
                  <ErrorMassage
                    visible={touched?.[index]?.stock}
                    error={errors?.[index]?.stock}
                  />
                </td>
                <td>
                  <div className="radio-group">
                    <input
                      type="radio"
                      id={`radio5-${index}`}
                      name={'ownership5' + index}
                    onBlur={handleBlur}
                      className="custom-radio"
                      checked={item.ownership === 'S-1'}
                      onChange={(e) => handleChange('S-1', index, 'ownership')}
                    />
                    <label htmlFor={`radio5-${index}`} className="custom-label">
                      S-1
                    </label>

                    <input
                      type="radio"
                      id={`radio6-${index}`}
                    onBlur={handleBlur}
                    name={'ownership6' + index}
                      className="custom-radio"
                      checked={item.ownership === 'S-2'}
                      onChange={(e) => handleChange('S-2', index, 'ownership')}
                    />
                    <label htmlFor={`radio6-${index}`} className="custom-label">
                      S-2
                    </label>

                    <input
                      type="radio"
                    onBlur={handleBlur}
                    id={`radio7-${index}`}
                      name={'ownership7' + index}
                      className="custom-radio"
                      checked={item.ownership === 'Joint'}
                      onChange={(e) =>
                        handleChange('Joint', index, 'ownership')
                      }
                    />
                    <label htmlFor={`radio7-${index}`} className="custom-label">
                      Joint
                    </label>

                    <input
                      type="radio"
                      id={`-${index}`}
                      name={'ownership8' + index}
                    onBlur={handleBlur}
                      className="custom-radio"
                      checked={item.ownership === 'Trust'}
                      onChange={(e) =>
                        handleChange('Trust', index, 'ownership')
                      }
                    />
                    <label htmlFor={`radio8-${index}`} className="custom-label">
                      Trust
                    </label>
                    <ErrorMassage
                      visible={touched?.[index]?.ownership}
                      error={errors?.[index]?.ownership}
                    />
                  </div>
                    <ErrorMassage visible={touched?.[index]?.ownership} error={errors?.[index]?.ownership} />
                </td>

                <td>
                  <input
                    type="number"
                    onBlur={handleBlur}
                    name="shares"
                    value={item.shares}
                    onChange={(e) =>
                      handleChange(e.target.value, index, e.target.name)
                    }
                  />
                  <ErrorMassage
                    visible={touched?.[index]?.shares}
                    error={errors?.[index]?.shares}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onBlur={handleBlur}
                    name="balance"
                    value={item.balance}
                    onChange={(e) =>
                      handleChange(e.target.value, index, e.target.name)
                    }
                    className="text-end"
                  />
                  <ErrorMassage
                    visible={touched?.[index]?.balance}
                    error={errors?.[index]?.balance}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <button onClick={handleSave} className='wp-block-button__link wp-element-button mt-4'>Save and Continue</button> */}
      </div>
    </div>
  );
}
