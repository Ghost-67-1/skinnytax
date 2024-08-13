'use client';
import React, { useEffect, useState } from 'react';
import ErrorMassage from '../ErrorMassage';

export default function FormTable({ data, handleChange = () => {}, touched, errors }) {
  console.log("datadatadatadatadata",data)
return (
    <div className="Form-table mb-5">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
            <th>No.</th>
              <th>Name of Institution</th>
              <th>Ownership</th>
              <th>Account Type</th>
              <th>Approx. Balance</th>
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
                  <ErrorMassage visible={touched?.[index]?.name} error={errors?.[index]?.name} />
                </td>
                <td>
                  <div className="radio-group">
                    <input
                      type="radio"
                      id={`radio1-${index}`}
                      name={"ownership"+index}
                      className="custom-radio"
                      checked={item.ownership === 'S-1'}
                      onChange={(e) => handleChange("S-1", index, 'ownership')}
                    />
                    <label htmlFor={`radio1-${index}`} className="custom-label">
                      S-1
                    </label>

                    <input
                      type="radio"
                      id={`radio2-${index}`}
                      name={"ownership"+index}
                      className="custom-radio"
                      checked={item.ownership === 'S-2'}
                      onChange={(e) => handleChange('S-2', index, 'ownership')}
                    />
                    <label htmlFor={`radio2-${index}`} className="custom-label">
                      S-2
                    </label>

                    <input
                      type="radio"
                      id={`radio3-${index}`}
                      name={"ownership"+index}
                      className="custom-radio"
                      checked={item.ownership === 'Joint'}
                      onChange={(e) => handleChange("Joint", index, 'ownership')}
                    />
                    <label htmlFor={`radio3-${index}`} className="custom-label">
                      Joint
                    </label>

                    <input
                      type="radio"
                      id={`radio4-${index}`}
                      name={"ownership"+index}
                      className="custom-radio"
                      checked={item.ownership === 'Trust'}
                      onChange={(e) => handleChange("Trust", index, 'ownership')}
                    />
                    <label htmlFor={`radio4-${index}`} className="custom-label">
                      Trust
                    </label>
                  </div>
                  <ErrorMassage visible={touched?.[index]?.ownership} error={errors?.[index]?.ownership} />
                </td>

                <td>
                  <select
                    name="account_type"
                    className='d-block'
                    value={item.account_type}
                    onChange={(e) => handleChange(e.target.value, index, e.target.name)}
                  >
                    <option value="Checking">Checking</option>
                    <option value="Saving">Saving</option>
                    <option value="CD">CD</option>
                  </select>
                  <ErrorMassage visible={touched?.[index]?.account_type} error={errors?.[index]?.account_type} />
                </td>
                <td>
                  <input
                    type="text"
                    name="approx_balance"
                    value={item.approx_balance}
                    onChange={(e) => handleChange(e.target.value, index, e.target.name)}
                    className="text-end"
                  />
                  <ErrorMassage visible={touched?.[index]?.approx_balance} error={errors?.[index]?.approx_balance} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}