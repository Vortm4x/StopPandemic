import React from 'react'

import PropTypes from 'prop-types'

import CompanyLogo from './company-logo'
import CompanyTitle from './company-title'
import './admin-header.css'

const AdminHeader = (props) => {
  return (
    <header className={`admin-header-admin-header ${props.rootClassName} `}>
      <div className="admin-header-logo-title">
        <CompanyLogo
          rootClassName="company-logo-root-class-name"
          className=""
        ></CompanyLogo>
        <CompanyTitle
          rootClassName="company-title-root-class-name"
          className=""
        ></CompanyTitle>
      </div>
      <span className="admin-header-header-name header-text">
        {props.HeaderName}
      </span>
    </header>
  )
}

AdminHeader.defaultProps = {
  HeaderName: 'Admin dashboad',
  rootClassName: '',
}

AdminHeader.propTypes = {
  HeaderName: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AdminHeader
