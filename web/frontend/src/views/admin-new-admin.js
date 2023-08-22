import React from 'react'
import { Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet'
import { useState } from 'react'

import AdminHeader from '../components/admin-header'
import AdminNavBar from '../components/admin-nav-bar'
import './admin-new-admin.css'

const AdminNewAdmin = (props) => {

  const isAuthenticated = !!localStorage.getItem('adminData');
  if (!isAuthenticated) {
    return <Redirect to={`/admin/login`} />;
  }

  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    password: '',
    repeatPassword: '',
  });

  const adminData = JSON.parse(localStorage.getItem('adminData'));
  const adminId = adminData.adminId; // Get the logged-in admin's id

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.repeatPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      // Send registration data to the server using an HTTP request
      const response = await fetch('/api/admin/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          username: formData.username,
          password: formData.password,
          assignee: adminId, // Use current admin id as assignee
        }),
      });

      if (response.ok) {
        alert('Admin account registered successfully');
      } else {
        const data = await response.json();
        alert(data.message || 'Failed to register admin account');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="admin-new-admin-container">
      <Helmet>
        <title>AdminNewAdmin - STOPandemic</title>
        <meta property="og:title" content="AdminNewAdmin - STOPandemic" />
      </Helmet>
      <AdminHeader rootClassName="admin-header-root-class-name3"></AdminHeader>
      <AdminNavBar rootClassName="admin-nav-bar-root-class-name2"></AdminNavBar>
      <main className="admin-new-admin-admin-main">
        <form className="admin-new-admin-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            required
            placeholder="Full name"
            className="input auth-input admin-register-fullname"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="username"
            required
            placeholder="Username"
            className="input auth-input admin-register-username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            className="input auth-input admin-register-password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="repeatPassword"
            required
            placeholder="Repeat password"
            className="input auth-input admin-register-repeat-password"
            value={formData.repeatPassword}
            onChange={handleChange}
          />
          <button type="submit" className="admin-register-register-button button">
            <span className="admin-register-register-button-text">
              <span>Register</span>
              <br />
            </span>
          </button>
        </form>

      </main>
    </div>
  )
}

export default AdminNewAdmin
