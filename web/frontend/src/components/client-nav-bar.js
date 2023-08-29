import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './client-nav-bar.css'

const ClientNavBar = (props) => {
  return (
    <nav className={`client-nav-bar-admin-nav-bar ${props.rootClassName} `}>
      <Link
        to="/client/company"
        className="client-nav-bar-navlink nav-link"
      >
        <span className="">Company</span>
        <br className=""></br>
      </Link>
      <Link
        to="/client/health-report"
        className="client-nav-bar-navlink1 nav-link"
      >
        <span className="">Health report</span>
        <br className=""></br>
      </Link>
      <Link
        to="/client/statistics"
        className="client-nav-bar-navlink2 nav-link"
      >
        <span className="">Statistics</span>
        <br className=""></br>
      </Link>
      <Link 
      to="/client/logout"
      className="client-nav-bar-link nav-link"
      >
        <span className="">Log out</span>
        <br className=""></br>
      </Link>
    </nav>
  )
}

ClientNavBar.defaultProps = {
  rootClassName: '',
}

ClientNavBar.propTypes = {
  rootClassName: PropTypes.string,
}

export default ClientNavBar
