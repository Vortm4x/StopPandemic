import React from 'react'

import PropTypes from 'prop-types'

import './employees-even-row.css'

const EmployeesEvenRow = (props) => {
  return (
    <div className="employees-even-row-companies-row">
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

EmployeesEvenRow.defaultProps = {
  email: 'E-MAIL',
  rootClassName: '',
  record_number: '#',
  fullname: 'FULLNAME',
  position: 'POSITION',
  phone: 'PHONE',
}

EmployeesEvenRow.propTypes = {
  email: PropTypes.string,
  rootClassName: PropTypes.string,
  record_number: PropTypes.string,
  fullname: PropTypes.string,
  position: PropTypes.string,
  phone: PropTypes.string,
}

export default EmployeesEvenRow
