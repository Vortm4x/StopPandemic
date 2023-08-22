import React from 'react'

import PropTypes from 'prop-types'

import './company-logo.css'

const CompanyLogo = (props) => {
  return (
    <div className={`company-logo-container ${props.rootClassName} `}>
      <svg viewBox="0 0 1024 1024" className="company-logo-border-shield">
        <path
          d="M512 42l384 172v256q0 178-110 325t-274 187q-164-40-274-187t-110-325v-256z"
          className=""
        ></path>
      </svg>
      <svg viewBox="0 0 1024 1024" className="company-logo-inner-shield">
        <path
          d="M512 42l384 172v256q0 178-110 325t-274 187q-164-40-274-187t-110-325v-256z"
          className=""
        ></path>
      </svg>
      <svg viewBox="0 0 1024 1024" className="company-logo-inner-cross">
        <path
          d="M992 384h-352v-352c0-17.672-14.328-32-32-32h-192c-17.672 0-32 14.328-32 32v352h-352c-17.672 0-32 14.328-32 32v192c0 17.672 14.328 32 32 32h352v352c0 17.672 14.328 32 32 32h192c17.672 0 32-14.328 32-32v-352h352c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32z"
          className=""
        ></path>
      </svg>
    </div>
  )
}

CompanyLogo.defaultProps = {
  rootClassName: '',
}

CompanyLogo.propTypes = {
  rootClassName: PropTypes.string,
}

export default CompanyLogo
