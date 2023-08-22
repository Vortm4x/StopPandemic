import React from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet'

import CompanyLogo from '../components/company-logo'
import CompanyTitle from '../components/company-title'
import AdminNavBar from '../components/admin-nav-bar'
import './admin-main.css'

const AdminMain = (props) => {

  const isAuthenticated = !!localStorage.getItem('adminData');
  if(!isAuthenticated) {
    return <Redirect to={`/admin/login`}/>;
  }

  return (
    <div className="admin-main-container">
      <Helmet>
        <title>AdminMain - STOPandemic</title>
        <meta property="og:title" content="AdminMain - STOPandemic" />
      </Helmet>
      <header className="admin-main-admin-header">
        <Link to="/admin/main" className="admin-main-navlink">
          <div className="admin-main-logo-title">
            <CompanyLogo rootClassName="company-logo-root-class-name3"></CompanyLogo>
            <CompanyTitle rootClassName="company-title-root-class-name3"></CompanyTitle>
          </div>
        </Link>
        <span className="admin-main-header-name header-text">
          Admin dashboad
        </span>
      </header>
      <AdminNavBar></AdminNavBar>
      <main className="admin-main-admin-main"></main>
    </div>
  )
}

export default AdminMain
