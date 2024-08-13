'use client';
import ErrorMessage  from '../ErrorMassage';
import React, { useEffect, useState } from 'react';

export default function FormTable({ data, handleChange = () => {}, touched, errors, handleBlur }) {
  return (
    <div className="Form-table mb-5">
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
                    onBlur={handleBlur}
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
                      id={`radio9-${index}`}
                      name={"ownership9"+index}
                      className="custom-radio"
                    onBlur={handleBlur}
                      value="S-1"
                      checked={item.ownership === 'S-1'}
                      onChange={(e) => handleChange(e.target.value, index, 'ownership')}
                    />
                    <label htmlFor={`radio9-${index}`} className="custom-label">
                      S-1
                    </label>

                    <input
                      type="radio"
                    onBlur={handleBlur}
                    id={`radio10-${index}`}
                      name={"ownership10"+index}
                      className="custom-radio"
                      value="S-2"
                      checked={item.ownership === 'S-2'}
                      onChange={(e) => handleChange(e.target.value, index, 'ownership')}
                    />
                    <label htmlFor={`radio10-${index}`} className="custom-label">
                      S-2
                    </label>

                    <input
                      type="radio"
                      id={`radio11-${index}`}
                      name={"ownership11"+index}
                      className="custom-radio"
                    onBlur={handleBlur}
                      value="Joint"
                      checked={item.ownership === 'Joint'}
                      onChange={(e) => handleChange(e.target.value, index, 'ownership')}
                    />
                    <label htmlFor={`radio11-${index}`} className="custom-label">
                      Joint
                    </label>

                    <input
                      type="radio"
                      id={`radio12-${index}`}
                      name={"ownership12"+index}
                      className="custom-radio"
                    onBlur={handleBlur}
                      value="Trust"
                      checked={item.ownership === 'Trust'}
                      onChange={(e) => handleChange(e.target.value, index, 'ownership')}
                    />
                    <label htmlFor={`radio12-${index}`} className="custom-label">
                      Trust
                    </label>
                  </div>
                    <ErrorMessage visible={touched?.[index]?.ownership} error={errors?.[index]?.ownership} />
                </td>
                <td>
                  <input
                    type="text"
                    name="balance"
                    value={item.balance}
                    onBlur={handleBlur}
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
