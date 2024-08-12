import React from 'react';
import P2BankAndSaving from '../../components/P2/P2BankAndSaving';
import P2StocksOrBonds from '../../components/P2/P2StocksOrBonds';
import P2MutualFunds from '../../components/P2/P2MutualFunds';
const page = () => {
  return (
    <>
      <div className='title-main-wrapper mb-3'>
        <strong className='large'>Bank, Savings, Loans and Credit Unions</strong>
        <span>
          These are accounts not in an IRA. You can list IRA and other
          retirement accounts in the next steps
        </span>
      </div>
      <P2BankAndSaving />
      <div className='title-main-wrapper mb-3'>
        <strong className='large'>Stocks or Bonds</strong>
        <span>
          These include certificates you actually hold. You can list Mutual
          Funds in the list below
        </span>
      </div>
      <div className='title-main-wrapper mb-3'>
        <P2StocksOrBonds />
        <strong className='large'>Mutual Funds or Brokerage Accounts</strong>
        <span>
          These are accounts not in an IRA. You can list IRA and other
          retirement accounts in the next steps
        </span>
      </div>

      <P2MutualFunds />
    </>
  );
};

export default page;
