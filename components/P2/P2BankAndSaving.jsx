'use client';
import React, { useState } from 'react';

export default function FormTable({ saveData = () => { } }) {
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
  console.log(
    '🚀 ~ const[formData,setFormData]=useState ~ formData:',
    formData
  );

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => {
      const newFormData = [...prevFormData];
      // Properly assign the radio button's value to the correct index in formData
      newFormData[index] = {
        ...newFormData[index],
        [name]: value
      };
      return newFormData;
    });
  };

  const handleSave = async () => {
    try {
      saveData(formData);
      // const response = await fetch('/api/financial-bslcu', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(formData)
      // });

      // if (!response.ok) {
      //   throw new Error('Something went wrong!');
      // }

      // const result = await response.json();
      // console.log('Data saved:', result);
    } catch (error) {
      console.error('Failed to save data:', error);
    }
  };

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
                  <div className="radio-group">
                    <input
                      type="radio"
                      id={`radio1-${index}`}
                      name="ownership"
                      className="custom-radio"
                      value="S-1"
                      checked={data.ownership === 'S-1'}
                      onChange={(e) => handleChange(e, index)}
                    />
                    <label htmlFor={`radio1-${index}`} className="custom-label">
                      S-1
                    </label>

                    <input
                      type="radio"
                      id={`radio2-${index}`}
                      name="ownership"
                      className="custom-radio"
                      value="S-2"
                      checked={data.ownership === 'S-2'}
                      onChange={(e) => handleChange(e, index)}
                    />
                    <label htmlFor={`radio2-${index}`} className="custom-label">
                      S-2
                    </label>

                    <input
                      type="radio"
                      id={`radio3-${index}`}
                      name="ownership"
                      className="custom-radio"
                      value="Joint"
                      checked={data.ownership === 'Joint'}
                      onChange={(e) => handleChange(e, index)}
                    />
                    <label htmlFor={`radio3-${index}`} className="custom-label">
                      Joint
                    </label>

                    <input
                      type="radio"
                      id={`radio4-${index}`}
                      name="ownership"
                      className="custom-radio"
                      value="Trust"
                      checked={data.ownership === 'Trust'}
                      onChange={(e) => handleChange(e, index)}
                    />
                    <label htmlFor={`radio4-${index}`} className="custom-label">
                      Trust
                    </label>
                  </div>
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
        <button onClick={handleSave} className='wp-block-button__link wp-element-button mt-4'>Save and Continue</button>
      </div>
    </div>
  );
}
