import React from 'react'
import { Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet'

import AdminHeader from '../components/admin-header'
import AdminNavBar from '../components/admin-nav-bar'
import './admin-export-data.css'

const AdminExportData = (props) => {

  const isAuthenticated = !!localStorage.getItem('adminData');
  if(!isAuthenticated) {
    return <Redirect to={`/admin/login`}/>;
  }

  return (
    <div className="admin-export-data-container">
      <Helmet>
        <title>AdminExportData - STOPandemic</title>
        <meta property="og:title" content="AdminExportData - STOPandemic" />
      </Helmet>
      <AdminHeader rootClassName="admin-header-root-class-name1"></AdminHeader>
      <AdminNavBar rootClassName="admin-nav-bar-root-class-name1"></AdminNavBar>
      <main className="admin-export-data-admin-main"></main>
    </div>
  )
}

export default AdminExportData
