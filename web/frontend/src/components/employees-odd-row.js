import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './employees-odd-row.css'

const EmployeesOddRow = (props) => {
  return (
    <div className="employees-odd-row-companies-row">
      <div className="table-cell table-content-cell table-content-order-cell">
        <span>{props.record_number}</span>
      </div>
      <div className="table-cell table-content-cell">
        <Link to={`/admin/employee/${props.employee_id}`}>{props.fullname}</Link>
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
  employee_id: 'NULL',
  phone: 'PHONE',
  email: 'E-MAIL',
  position: 'POSITION',
  rootClassName: '',
  fullname: 'FULLNAME',
  record_number: '#',
}

EmployeesOddRow.propTypes = {
  employee_id: PropTypes.string,
  company_id: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  position: PropTypes.string,
  rootClassName: PropTypes.string,
  fullname: PropTypes.string,
  record_number: PropTypes.string,
}

export default EmployeesOddRow
