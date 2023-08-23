import React from 'react'

import PropTypes from 'prop-types'

import './companies-table.css'

const CompaniesTable = (props) => {
  return (
    <div className={`companies-table-container ${props.rootClassName} `}>
      <div className="companies-table-companies-header">
        <div className="table-cell table-heading-cell table-content-order-cell">
          <span>
            <span>#</span>
            <br></br>
          </span>
        </div>
        <div className="table-cell table-heading-cell companies-table-container2">
          <span>
            <span>Company name</span>
            <br></br>
          </span>
        </div>
        <div className="table-cell table-heading-cell">
          <span>
            <span>Address</span>
            <br></br>
          </span>
        </div>
        <div className="table-cell table-heading-cell table-content-date-cell">
          <span>
            <span>Creation date</span>
            <br></br>
          </span>
        </div>
      </div>
      {props.children}
    </div>
  )
}

CompaniesTable.defaultProps = {
  rootClassName: '',
}

CompaniesTable.propTypes = {
  rootClassName: PropTypes.string,
}

export default CompaniesTable
