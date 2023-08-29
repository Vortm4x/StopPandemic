import React from 'react'

import './employees-header.css'

const EmployeesHeader = (props) => {
  return (
    <div className="employees-header-employees-header">
      <div className="table-cell table-heading-cell table-content-order-cell">
        <span>
          <span>#</span>
          <br></br>
        </span>
      </div>
      <div className="table-cell table-heading-cell">
        <span>
          <span>Fullname</span>
          <br></br>
        </span>
      </div>
      <div className="table-cell table-heading-cell">
        <span>
          <span>E-mail</span>
          <br></br>
        </span>
      </div>
      <div className="table-cell table-heading-cell">
        <span>
          <span>Phone</span>
          <br></br>
        </span>
      </div>
      <div className="table-cell table-heading-cell">
        <span>
          <span>Position</span>
          <br></br>
        </span>
      </div>
    </div>
  )
}

export default EmployeesHeader
