import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet'

import AdminHeader from '../components/admin-header'
import './admin-login.css'

const AdminLogin = (props) => {

  const isAuthenticated = !!localStorage.getItem('adminData');
  if(isAuthenticated) {
    return <Redirect to={`/admin/main`}/>;
  }
   
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Token:', data.token);

        const adminData = {
          adminId: data.adminId,
          fullName: data.fullName,
          username: data.username,
          token: data.token // Include the token in admin data
        };

        localStorage.setItem('adminData', JSON.stringify(adminData));
        history.push('/admin/main');

        // You can store the token in local storage or state for future use
      } else {
        const data = await response.json();
        console.log('Error:', data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };


  return (
    <div className="admin-login-container">
      <Helmet>
        <title>AdminLogin - STOPandemic</title>
        <meta property="og:title" content="AdminLogin - STOPandemic" />
      </Helmet>
      <AdminHeader rootClassName="admin-header-root-class-name2"></AdminHeader>
      <main className="admin-login-admin-main">
        <form className="admin-login-admin-login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            required
            autoFocus
            placeholder="Username"
            className="input auth-input admin-login-username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input auth-input admin-login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="admin-login-login-button button">
            <span className="admin-login-login-button-text">
              <span>Login</span>
              <br></br>
            </span>
          </button>
        </form>
      </main>
    </div>
  )
}

export default AdminLogin
