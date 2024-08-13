'use client';
import React, { useEffect, useState } from 'react';
import ErrorMassage from '../ErrorMassage';

export default function FormTable({data, handleChange = () => {}, touched, errors}) {
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
                    name="stock"
                    value={item.stock}
                    onChange={(e) => handleChange(e.target.value, index, e.target.name)}
                  />
                  <ErrorMassage visible={touched?.[index]?.stock} error={errors?.[index]?.stock} />
                </td>
                <td>
                  <div className="radio-group">
                    <input
                      type="radio"
                      id={`radio1-${index}`}
                      name={"ownership"+index}
                      className="custom-radio"
                      value="S-1"
                      checked={item.ownership === 'S-1'}
                      onChange={(e) => handleChange(e.target.value, index, 'ownership')}
                    />
                    <label htmlFor={`radio1-${index}`} className="custom-label">
                      S-1
                    </label>

                    <input
                      type="radio"
                      id={`radio2-${index}`}
                      name={"ownership"+index}
                      className="custom-radio"
                      value="S-2"
                      checked={item.ownership === 'S-2'}
                      onChange={(e) => handleChange(e.target.value, index, 'ownership')}
                    />
                    <label htmlFor={`radio2-${index}`} className="custom-label">
                      S-2
                    </label>

                    <input
                      type="radio"
                      id={`radio3-${index}`}
                      name={"ownership"+index}
                      className="custom-radio"
                      value="Joint"
                      checked={item.ownership === 'Joint'}
                      onChange={(e) => handleChange(e.target.value, index, 'ownership')}
                    />
                    <label htmlFor={`radio3-${index}`} className="custom-label">
                      Joint
                    </label>

                    <input
                      type="radio"
                      id={`radio4-${index}`}
                      name={"ownership"+index}
                      className="custom-radio"
                      value="Trust"
                      checked={item.ownership === 'Trust'}
                      onChange={(e) => handleChange(e.target.value, index, 'ownership')}
                    />
                    <label htmlFor={`radio4-${index}`} className="custom-label">
                      Trust
                    </label>
                  </div>
                    <ErrorMassage visible={touched?.[index]?.ownership} error={errors?.[index]?.ownership} />
                </td>

                <td>
                <input
                    type="number"
                    name="shares"
                    value={item.shares}
                    onChange={(e) => handleChange(e.target.value, index, e.target.name)}
                  />
                  <ErrorMassage visible={touched?.[index]?.shares} error={errors?.[index]?.shares} />
                </td>
                <td>
                  <input
                    type="text"
                    name="balance"
                    value={item.balance}
                    onChange={(e) => handleChange(e.target.value, index, e.target.name)}
                    className="text-end"
                  />
                  <ErrorMassage visible={touched?.[index]?.balance} error={errors?.[index]?.balance} />
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
