import React from 'react'

import PropTypes from 'prop-types'

import './employees-odd-row.css'

const EmployeesOddRow = (props) => {
  return (
    <div className="employees-odd-row-companies-row">
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

EmployeesOddRow.defaultProps = {
  phone: 'PHONE',
  email: 'E-MAIL',
  position: 'POSITION',
  rootClassName: '',
  fullname: 'FULLNAME',
  record_number: '#',
}

EmployeesOddRow.propTypes = {
  phone: PropTypes.string,
  email: PropTypes.string,
  position: PropTypes.string,
  rootClassName: PropTypes.string,
  fullname: PropTypes.string,
  record_number: PropTypes.string,
}

export default EmployeesOddRow
