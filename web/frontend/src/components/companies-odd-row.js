import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './companies-odd-row.css'

const CompaniesOddRow = (props) => {
  return (
    <div className={`companies-odd-row-companies-row ${props.rootClassName} `}>
      <div className="table-cell table-content-order-cell table-content-cell">
        <span className="">{props.record_number}</span>
      </div>
      <div className="table-cell table-content-cell">
        <Link to={`/admin/companies/${props.company_id}`}>{props.company_name}</Link>
      </div>
      <div className="table-cell table-content-cell">
        <span className="">{props.company_address}</span>
      </div>
      <div className="table-cell table-content-cell table-content-date-cell">
        <span className="">{props.creation_date}</span>
      </div>
    </div>
  )
}

CompaniesOddRow.defaultProps = {
  record_number: '#',
  company_name: 'COMPANY',
  company_address: 'ADDRESS',
  creation_date: 'DATE',
  company_id: 'NULL',
  rootClassName: '',
}

CompaniesOddRow.propTypes = {
  record_number: PropTypes.string,
  company_name: PropTypes.string,
  company_address: PropTypes.string,
  creation_date: PropTypes.string,
  company_id: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CompaniesOddRow
