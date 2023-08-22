import React from 'react'
import { Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet'

import ClientHeader from '../components/client-header'
import './client-login.css'

const ClientLogin = (props) => {
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
          />
          <input
            type="password"
            placeholder="Password"
            className="input auth-input client-login-password"
          />
          <button type="button" className="client-login-login-button button">
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
