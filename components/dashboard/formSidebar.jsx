import React from 'react';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import { MdOutlineCancel } from 'react-icons/md';
import { LuAlertTriangle } from 'react-icons/lu';

import { IoSearchOutline } from 'react-icons/io5';
import sideBarSearchFlipIcon from '@/assets/images/icons/side-bar-search-flip-icon.svg';
import Image from 'next/image';
import { FaRegFolder } from 'react-icons/fa';

const FormSidebar = ({
  parts,
  setPartNumber,
  setStepNumber,
  completedSteps,
  partNumber,
  stepNumber
}) => {
  return (
    <div className="form-side-bar">
      <div>
        <div className="main-title-wrapper">
          <div className="search-bar-wrapper">
            <div className="form-group">
              <IoSearchOutline className="search-icon" />
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
            <Image
              src={sideBarSearchFlipIcon}
              alt="sideBarSearchFlipIcon"
              className="sideBarSearchFlipIcon"
            />
          </div>
        </div>
        <div className="main-list-wrapper">
          <ul className="list">
            {Object.keys(parts).map((key, index) =>
              Object.keys(parts[key]).map((key2, index1) => (
                <li
                  onClick={() => {
                    if(index === partNumber && index1 > completedSteps) return
                    setStepNumber(index1);
                    setPartNumber(index);
                  }}
                >
                  <div className="main-wrapper">
                    <FaRegFolder />
                    <p style={{ textTransform: 'capitalize' }}>
                      {key.split('_').join(' ')} :{' '}
                      <span className="clr">{key2}</span>
                    </p>
                  </div>
                  <ul
                    className={`dropdown-wrapper ${index === partNumber && index1 === stepNumber ? 'active' : ''}`}
                  >
                    {parts[key][key2].map((item) => (
                      <li>
                        <FaRegFolder />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
      <div className="side-bar-footer">
        <span className="text">System info status</span>
        <ul className="list-icon">
          <li>
            <IoShieldCheckmarkOutline
              style={{ color: 'rgba(4, 158, 117, 1)' }}
            />
          </li>
          <li>
            <MdOutlineCancel style={{ color: 'rgba(250, 69, 71, 1)' }} />
          </li>
          <li>
            <LuAlertTriangle style={{ color: 'rgba(242, 153, 74, 1)' }} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FormSidebar;
