import React from 'react'

import PropTypes from 'prop-types'

import './company-info.css'

const CompanyInfo = (props) => {
  return (
    <div className="company-info-company-info">
      <div className="company-info-container">
        <span className="company-info-text company-info-title">
          <span>Company name</span>
          <br></br>
        </span>
        <span className="company-info-text">{props.company}</span>
      </div>
      <div className="company-info-container1">
        <span className="company-info-text company-info-title">
          <span>Address</span>
          <br></br>
        </span>
        <span className="company-info-text">{props.address}</span>
      </div>
      <div className="company-info-container2">
        <span className="company-info-text company-info-title">
          <span>Description</span>
          <br></br>
        </span>
        <span className="company-info-text">{props.description}</span>
      </div>
    </div>
  )
}

CompanyInfo.defaultProps = {
  description: 'DESCRIPTION',
  address: 'ADDRESS',
  company: 'COMPANY',
}

CompanyInfo.propTypes = {
  description: PropTypes.string,
  address: PropTypes.string,
  company: PropTypes.string,
}

export default CompanyInfo
