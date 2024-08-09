import React from 'react'

export default function Forminput() {
    return (
        <div className='Form-table'>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name of institution</th>
                            <th>Ownership</th>
                            <th>Account Type</th>
                            <th>Approx. Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Type here</td>
                            <td className='table_checked'>
                                <label class="container">S-1
                                    <input type="radio" name="radio" />
                                    <span class="checkmark"></span>
                                </label>
                                <label class="container">S-2
                                    <input type="radio" name="radio" />
                                    <span class="checkmark"></span>
                                </label>
                                <label class="container">Joint
                                    <input type="radio" name="radio" />
                                    <span class="checkmark"></span>
                                </label>
                                <label class="container">Trust
                                    <input type="radio" name="radio" />
                                    <span class="checkmark"></span>
                                </label>
                            </td>
                            <td>
                                <select id="checkers" name="Account">
                                    <option value="Checking">Checking</option>
                                    <option value="Saving">Saving</option>
                                    <option value="CD">CD</option>
                                </select>
                            </td>
                            <td className='text-end'>$12344</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}