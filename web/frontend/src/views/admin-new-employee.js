import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import CompanyLogo from '../components/company-logo'
import CompanyTitle from '../components/company-title'
import AdminNavBar from '../components/admin-nav-bar'
import './admin-new-employee.css'

const AdminNewEmployee = (props) => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const companyId = queryParams.get('company_id');

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    position: '',
    password: '',
    repeatPassword: '',
    company: companyId,
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    // Check if passwords match
    if (formData.password !== formData.repeatPassword) {
      console.error('Passwords do not match.');
      return;
    }

    // Make the POST request to create a new employee
    fetch('/api/employee/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(savedEmployee => {
        console.log('New employee registered:', savedEmployee);
        // Optionally, you can reset the form or show a success message
      })
      .catch(error => {
        console.error('Error registering employee:', error);
        // Handle the error as needed
      });
  };


  return (
    <div className="admin-new-employee-container">
      <Helmet>
        <title>AdminNewEmployee - STOPandemic</title>
        <meta property="og:title" content="AdminNewEmployee - STOPandemic" />
      </Helmet>
      <header className="admin-new-employee-admin-header">
        <Link to="/admin/main" className="admin-new-employee-navlink">
          <div className="admin-new-employee-logo-title">
            <CompanyLogo rootClassName="company-logo-root-class-name9"></CompanyLogo>
            <CompanyTitle rootClassName="company-title-root-class-name9"></CompanyTitle>
          </div>
        </Link>
        <span className="admin-new-employee-header-name header-text">
          Admin dashboad
        </span>
      </header>
      <AdminNavBar></AdminNavBar>
      <main className="admin-new-employee-admin-main">
        <form className="admin-new-employee-form">
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleInputChange}
            required
            placeholder="Fullname"
            className="input auth-input"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="E-mail"
            className="input auth-input"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone"
            className="input auth-input"
          />
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            placeholder="Position"
            className="input auth-input"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="input auth-input"
          />
          <input
            type="password"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleInputChange}
            placeholder="Repeat password"
            className="input auth-input"
          />
          <button
            type="button"
            className="admin-new-employee-submitt-company-button button"
            onClick={handleFormSubmit}
          >
            <span className="admin-new-employee-submit-company-button-text">
              <span>Submit</span>
              <br />
            </span>
          </button>
        </form>
      </main>
    </div>
  )
}

export default AdminNewEmployee
