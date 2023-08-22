import React from 'react'

import PropTypes from 'prop-types'

import './company-title.css'

const CompanyTitle = (props) => {
  return (
    <div className={`company-title-container ${props.rootClassName} `}>
      <span className="title title-left header-text">STO</span>
      <span className="company-title-title-b title title-left header-text title-right">
        P
      </span>
      <span className="company-title-title-c title header-text title-right">
        andemic
      </span>
    </div>
  )
}

CompanyTitle.defaultProps = {
  rootClassName: '',
}

CompanyTitle.propTypes = {
  rootClassName: PropTypes.string,
}

export default CompanyTitle
