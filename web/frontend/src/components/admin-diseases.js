import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import CompanyLogo from '../components/company-logo'
import CompanyTitle from '../components/company-title'
import AdminNavBar from '../components/admin-nav-bar'
import './admin-diseases.css'

const AdminDiseases = (props) => {
  return (
    <div className="admin-diseases-container">
      <Helmet>
        <title>AdminDiseases - STOPandemic</title>
        <meta property="og:title" content="AdminDiseases - STOPandemic" />
      </Helmet>
      <header className="admin-diseases-admin-header">
        <Link to="/admin/main" className="admin-diseases-navlink">
          <div className="admin-diseases-logo-title">
            <CompanyLogo rootClassName="company-logo-root-class-name11"></CompanyLogo>
            <CompanyTitle rootClassName="company-title-root-class-name11"></CompanyTitle>
          </div>
        </Link>
        <span className="admin-diseases-header-name header-text">
          Admin dashboad
        </span>
      </header>
      <AdminNavBar></AdminNavBar>
      <main className="admin-diseases-admin-main"></main>
    </div>
  )
}

export default AdminDiseases
