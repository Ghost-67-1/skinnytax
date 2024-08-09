import React from 'react';
import P2BankAndSaving from '../../components/P2/P2BankAndSaving';
import P2StocksOrBonds from '../../components/P2/P2StocksOrBonds';
import P2MutualFunds from '../../components/P2/P2MutualFunds';
const page = () => {
  return (
    <div>
      <div style={{ border: '1px solid black' }}>
        <h4>Bank, Savings, Loans and Credit Unions</h4>
        <p>
          These are accounts not in an IRA. You can list IRA and other
          retirement accounts in the next steps
        </p>
      </div>
      <P2BankAndSaving />
      <div style={{ border: '1px solid black' }}>
        <h4>Stocks or Bonds</h4>
        <p>
          These include certificates you actually hold. You can list Mutual
          Funds in the list below
        </p>
      </div>
      <div style={{ border: '1px solid black' }}>
        <P2StocksOrBonds />
        <h4>Mutual Funds or Brokerage Accounts</h4>
        <p>
          These are accounts not in an IRA. You can list IRA and other
          retirement accounts in the next steps
        </p>
      </div>

      <P2MutualFunds />
    </div>
  );
};

export default page;
