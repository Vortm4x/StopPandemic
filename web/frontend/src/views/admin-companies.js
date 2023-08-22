import React from 'react'
import { Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet'

import AdminHeader from '../components/admin-header'
import AdminNavBar from '../components/admin-nav-bar'
import './admin-companies.css'

const AdminCompanies = (props) => {

  const isAuthenticated = !!localStorage.getItem('adminData');
  if(!isAuthenticated) {
    return <Redirect to={`/admin/login`}/>;
  }

  return (
    <div className="admin-companies-container">
      <Helmet>
        <title>AdminCompanies - STOPandemic</title>
        <meta property="og:title" content="AdminCompanies - STOPandemic" />
      </Helmet>
      <AdminHeader rootClassName="admin-header-root-class-name"></AdminHeader>
      <AdminNavBar rootClassName="admin-nav-bar-root-class-name"></AdminNavBar>
      <main className="admin-companies-admin-main"></main>
    </div>
  )
}

export default AdminCompanies
