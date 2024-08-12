'use client';
import React, { Fragment, useState } from 'react';
import FormProgressStepper from '@/components/FormProgressStepper';
import Instructionbox from '@/components/Instructionbox';;
import FormSidebar from '@/components/dashboard/formSidebar'
import PersonalInformationPart1Form from '@/components/dashboard/personalInformationPart1Form';
import PersonalInformationPart2Form from '@/components/dashboard/personalInformationPart2Form';
import PersonalInformationPart3Form from '@/components/dashboard/personalInformationPart3Form';

const parts = {
  part_one: { 'step-1': ['Information about you (S1)', 'Information about your spouse (S2)', 'Other information'], 'step-2': ['Children and family', 'Other information'], 'step-3': ["For Married Couples Only"] },
  part_two: { 'step-1': ['Bank, Savings, Loans and Credit Unions', 'Stocks or Bonds', 'Mutual Funds and /or Brokerage Accounts'], 'step-2': ['Promissory Notes & Trust Deeds Owed to You'], 'step-3': ["Real Estate", 'IRA', 'Life Insurance'], 'step-4': ["Non-Qualified Annuities", 'Limited or General Partnerships', 'Businesses'], 'step-5': ['Other Assets', 'Miscellaneous Information'] },
}
function InputForm() {
  const [partNumber, setPartNumber] = useState(0);
  const [stepNumber, setStepNumber] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(0);
  return (
    <div className="form-dashboard-page">
      <div className="container">
        <Instructionbox />
        <div className="form-dashboard-inner">
          <FormSidebar parts={parts} setPartNumber={setPartNumber} setStepNumber={setStepNumber} partNumber={partNumber} stepNumber={stepNumber} completedSteps={completedSteps} />
          <div className="form-dashboard">
            <div className="progress-bar-main-wrapper">
              <FormProgressStepper formNumber={completedSteps} />
            </div>
            {
              (completedSteps === 0 && partNumber === 0) ?
                <PersonalInformationPart1Form setCompletedSteps={setCompletedSteps} /> :
                (completedSteps === 1 && partNumber === 0) ?
                  <PersonalInformationPart2Form setCompletedSteps={setCompletedSteps} /> :
                  (completedSteps === 2 && partNumber === 0) ?
                    <PersonalInformationPart3Form setCompletedSteps={setCompletedSteps} /> :
                    null
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputForm;
