import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet'

import ClientHeader from '../components/client-header'
import './client-login.css'

const ClientLogin = (props) => {

  const isAuthenticated = !!localStorage.getItem('clientData');
  if (isAuthenticated) {
    return <Redirect to={`/client/main`} />;
  }

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/employee/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Client Login Successful:', data);

        const clientData = {
          _id: data._id,
          fullname: data.fullname,
          email: data.email,
          company: data.company,
          position: data.position,
          phone: data.phone,
          token: data.token,
      };

        localStorage.setItem('clientData', JSON.stringify(clientData));
        history.push('/client/main');
      } else {
        const data = await response.json();
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };


  return (
    <div className="client-login-container">
      <Helmet>
        <title>ClientLogin - STOPandemic</title>
        <meta property="og:title" content="ClientLogin - STOPandemic" />
      </Helmet>
      <ClientHeader rootClassName="client-header-root-class-name1"></ClientHeader>
      <div className="client-login-client-main">
        <form className="client-login-client-login-form">
          <input
            type="email"
            name="email"
            required
            autoFocus
            placeholder="E-mail"
            className="input auth-input client-login-email"
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="input auth-input client-login-password"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          />
          <button
            type="button"
            className="client-login-login-button button"
            onClick={handleSubmit}>
            <span className="client-login-login-button-text">
              <span>Login</span>
              <br></br>
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default ClientLogin
