'use client';
import React, { useState } from 'react';

export default function FormTable() {
  const [formData, setFormData] = useState(() => {
    return Array(6)
      .fill(null)
      .map(() => ({
        institutionName: '',
        ownership: 'S-1', // Default ownership
        accountType: 'Checking', // Default account type
        balance: ''
      }));
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => {
      const newFormData = [...prevFormData];
      newFormData[index] = {
        ...newFormData[index],
        [name]: value
      };
      return newFormData;
    });
  };

  const handleSave = async () => {
    try {
      const response = await fetch('/api/saveData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const result = await response.json();
      console.log('Data saved:', result);
    } catch (error) {
      console.error('Failed to save data:', error);
    }
  };

  return (
    <div className="Form-table">
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
            {formData.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="text"
                    name="institutionName"
                    value={data.institutionName}
                    onChange={(e) => handleChange(e, index)}
                  />
                </td>
                <td>
                  {/* Radio buttons setup */}
                  <label className="container">
                    S-1
                    <input
                      type="radio"
                      name="ownership"
                      value="S-1"
                      checked={data.ownership == 'S-1'}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </label>
                  <label className="container">
                    S-2
                    <input
                      type="radio"
                      name="ownership"
                      value="S-2"
                      checked={data.ownership == 'S-2'}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </label>
                  <label className="container">
                    Joint
                    <input
                      type="radio"
                      name="ownership"
                      value="Joint"
                      checked={data.ownership == 'Joint'}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </label>
                  <label className="container">
                    Trust
                    <input
                      type="radio"
                      name="ownership"
                      value="Trust"
                      checked={data.ownership == 'Trust'}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </label>
                </td>
                <td>
                  <select
                    name="accountType"
                    value={data.accountType}
                    onChange={(e) => handleChange(e, index)}
                  >
                    <option value="Checking">Checking</option>
                    <option value="Saving">Saving</option>
                    <option value="CD">CD</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    name="balance"
                    value={data.balance}
                    onChange={(e) => handleChange(e, index)}
                    className="text-end"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleSave}>Save and Continue</button>
      </div>
    </div>
  );
}
