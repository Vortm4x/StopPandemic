import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './admin-nav-bar.css'

const AdminNavBar = (props) => {
  return (
    <nav className={`admin-nav-bar-admin-nav-bar ${props.rootClassName} `}>
      <Link to="/admin/companies" className="admin-nav-bar-navlink nav-link">
        <span className="">Companies</span>
        <br className=""></br>
      </Link>
      <Link to="/admin/new-company" className="admin-nav-bar-navlink1 nav-link">
        <span className="">New company</span>
        <br className=""></br>
      </Link>
      <Link to="/admin/new-admin" className="admin-nav-bar-navlink2 nav-link">
        <span className="">New admin</span>
        <br className=""></br>
      </Link>
      <Link to="/admin/diseases" className="admin-nav-bar-navlink2 nav-link">
        <span className="">Diseases</span>
        <br className=""></br>
      </Link>
      <Link to="/admin/export-data" className="admin-nav-bar-link nav-link">
        <span className="">Export data</span>
        <br className=""></br>
      </Link>
      <Link to="/admin/main1" className="admin-nav-bar-link1 nav-link">
        <span className="">Log out</span>
        <br className=""></br>
      </Link>
    </nav>
  )
}

AdminNavBar.defaultProps = {
  rootClassName: '',
}

AdminNavBar.propTypes = {
  rootClassName: PropTypes.string,
}

export default AdminNavBar
