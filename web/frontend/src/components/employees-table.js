import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './employees-table.css'

const EmployeesTable = (props) => {
  return (
    <div className={`employees-table-container ${props.rootClassName} `}>
      <div className="employees-table-employees-header">
        <div className="table-cell table-heading-cell table-content-order-cell">
          <span className="">
            <span className="">#</span>
            <br className=""></br>
          </span>
        </div>
        <div className="table-cell table-heading-cell">
          <span className="">
            <span className="">Fullname</span>
            <br className=""></br>
          </span>
        </div>
        <div className="table-cell table-heading-cell">
          <span className="">
            <span className="">E-mail</span>
            <br className=""></br>
          </span>
        </div>
        <div className="table-cell table-heading-cell">
          <span className="">
            <span className="">Phone</span>
            <br className=""></br>
          </span>
        </div>
        <div className="table-cell table-heading-cell">
          <span className="">
            <span className="">Position</span>
            <br className=""></br>
          </span>
        </div>
      </div>
      {props.children}
      <div className="employees-table-employees-header1">
        <div className="table-cell table-heading-cell">
          <Link to={`/admin/new-employee?company_id=${props.company_id}`} >
            <span className="">Add new...</span>
            <br className=""></br>
          </Link>
        </div>
      </div>
    </div>
  )
}

EmployeesTable.defaultProps = {
  rootClassName: '',
  company_id: 'NULL',
}

EmployeesTable.propTypes = {
  rootClassName: PropTypes.string,
  company_id: PropTypes.string,
}

export default EmployeesTable
