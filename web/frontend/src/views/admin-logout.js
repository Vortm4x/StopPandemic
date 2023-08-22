import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Redirect } from "react-router-dom";

import CompanyLogo from '../components/company-logo'
import CompanyTitle from '../components/company-title'
import AdminNavBar from '../components/admin-nav-bar'
import './admin-logout.css'

const AdminLogout = (props) => {

    const isAuthenticated = !!localStorage.getItem('adminData');
    if(!isAuthenticated) {
      return <Redirect to={`/admin/login`}/>;
    }

    const history = useHistory();

    useEffect(() => {
      // Clear adminData from local storage
      localStorage.removeItem('adminData');
  
      // Redirect to the login page
      history.push('/admin/login');
    }, [history]);
  

  return (
    <div className="admin-logout-container">
      <Helmet>
        <title>AdminLogout - STOPandemic</title>
        <meta property="og:title" content="AdminLogout - STOPandemic" />
      </Helmet>
      <header className="admin-logout-admin-header">
        <Link to="/admin/main" className="admin-logout-navlink">
          <div className="admin-logout-logo-title">
            <CompanyLogo rootClassName="company-logo-root-class-name8"></CompanyLogo>
            <CompanyTitle rootClassName="company-title-root-class-name8"></CompanyTitle>
          </div>
        </Link>
        <span className="admin-logout-header-name header-text">
          Admin dashboad
        </span>
      </header>
      <AdminNavBar></AdminNavBar>
      <main className="admin-logout-admin-main">
        <span className="admin-logout-text">
          <span>Logging out...</span>
          <br></br>
        </span>
      </main>
    </div>
  )
}

export default AdminLogout
