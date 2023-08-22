import React from 'react'
import { Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet'
import { useState } from 'react'

import AdminHeader from '../components/admin-header'
import AdminNavBar from '../components/admin-nav-bar'
import './admin-new-company.css'

const AdminNewCompany = (props) => {

  const isAuthenticated = !!localStorage.getItem('adminData');
  if (!isAuthenticated) {
    return <Redirect to={`/admin/login`} />;
  }

  const [companyData, setCompanyData] = useState({
    name: '',
    description: '',
    address: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/company/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...companyData,
          creationDate: new Date(Date.now()).toISOString(),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('New company created:', data);
        // Redirect or display success message
      } else {
        const data = await response.json();
        console.error('Error creating company:', data.error);
        // Handle error response
      }
    } catch (error) {
      console.error('Error creating company:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCompanyData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="admin-new-company-container">
      <Helmet>
        <title>AdminNewCompany - STOPandemic</title>
        <meta property="og:title" content="AdminNewCompany - STOPandemic" />
      </Helmet>
      <AdminHeader rootClassName="admin-header-root-class-name4"></AdminHeader>
      <AdminNavBar rootClassName="admin-nav-bar-root-class-name3"></AdminNavBar>
      <main className="admin-new-company-admin-main">
      <form className="admin-new-company-form" onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="Company name"
            className="input auth-input"
            name="name"
            value={companyData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Address"
            className="input auth-input"
            name="address"
            value={companyData.address}
            onChange={handleChange}
          />
          <textarea
            placeholder="About company"
            className="admin-new-company-textarea textarea auth-input"
            name="description"
            value={companyData.description}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="admin-new-company-submitt-company-button button"
          >
            <span className="admin-new-company-submit-company-button-text">
              <span>Submit</span>
              <br />
            </span>
          </button>
        </form>
      </main>
    </div>
  )
}

export default AdminNewCompany
