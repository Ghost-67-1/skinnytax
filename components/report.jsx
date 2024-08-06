import React from 'react'

const Report = ({report}) => {
  return (
    <div className="report-summary-main">
            <div className="title">
                <h3>Report Summary</h3>
            </div>
            <div className="report-summary-cards">
              <div className="row">
              {Object.keys(report).map((key, index) => (
                  <div className='col-md-6 mb-2'>
         <div className="card-detail">
                    <span className="strong">{key}</span>
                    <strong>{report[key]|| 0}</strong>
                </div>
                  </div> 
                ))}
              </div>
               
            </div>
          </div>
  )
}

export default Report