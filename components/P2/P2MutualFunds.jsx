'use client';
import ErrorMessage  from '../ErrorMassage';
import React, { useEffect, useState } from 'react';

export default function FormTable({ data, handleChange = () => {}, touched, errors }) {
  return (
    <div className="Form-table">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name of Firm of Fund/Account</th>
              <th>Ownership</th>
              <th>Approx. Market Value</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={item.name}
                    onChange={(e) => handleChange(e.target.value, index, e.target.name)}
                  />
                  <ErrorMessage visible={touched?.[index]?.name} error={errors?.[index]?.name} />
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
                    <ErrorMessage visible={touched?.[index]?.ownership} error={errors?.[index]?.ownership} />
                  </div>
                </td>
                <td>
                  <input
                    type="text"
                    name="balance"
                    value={item.balance}
                    onChange={(e) => handleChange(e.target.value, index, e.target.name)}
                    className="text-end"
                  />
                  <ErrorMessage visible={touched?.[index]?.balance} error={errors?.[index]?.balance} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
