import React from 'react'

import PropTypes from 'prop-types'

import CompanyLogo from './company-logo'
import CompanyTitle from './company-title'
import './client-header.css'

const ClientHeader = (props) => {
  return (
    <header className={`client-header-admin-header ${props.rootClassName} `}>
      <div className="client-header-logo-title">
        <CompanyLogo
          rootClassName="company-logo-root-class-name2"
          className=""
        ></CompanyLogo>
        <CompanyTitle
          rootClassName="company-title-root-class-name2"
          className=""
        ></CompanyTitle>
      </div>
    </header>
  )
}

ClientHeader.defaultProps = {
  rootClassName: '',
  HeaderName: 'Admin dashboad',
}

ClientHeader.propTypes = {
  rootClassName: PropTypes.string,
  HeaderName: PropTypes.string,
}

export default ClientHeader
