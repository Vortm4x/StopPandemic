import React from 'react'

import PropTypes from 'prop-types'

import './employees-client-row.css'

const EmployeesClientRow = (props) => {
  return (
    <div className="employees-client-row-companies-row">
      <div className="table-cell table-content-cell table-content-order-cell">
        <span>{props.record_number}</span>
      </div>
      <div className="table-cell table-content-cell">
        <span>{props.fullname}</span>
      </div>
      <div className="table-cell table-content-cell">
        <span>{props.email}</span>
      </div>
      <div className="table-cell table-content-cell">
        <span>{props.phone}</span>
      </div>
      <div className="table-cell table-content-cell">
        <span>{props.position}</span>
      </div>
    </div>
  )
}

EmployeesClientRow.defaultProps = {
  rootClassName: '',
  record_number: '#',
  fullname: 'FULLNAME',
  email: 'E-MAIL',
  phone: 'PHONE',
  position: 'POSITION',
}

EmployeesClientRow.propTypes = {
  rootClassName: PropTypes.string,
  record_number: PropTypes.string,
  fullname: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  position: PropTypes.string,
}

export default EmployeesClientRow
