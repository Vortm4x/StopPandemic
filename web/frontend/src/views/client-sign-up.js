import React from 'react'
import { Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet'

import ClientHeader from '../components/client-header'
import './client-sign-up.css'

const ClientSignUp = (props) => {
  return (
    <div className="client-sign-up-container">
      <Helmet>
        <title>ClientSignUp - STOPandemic</title>
        <meta property="og:title" content="ClientSignUp - STOPandemic" />
      </Helmet>
      <ClientHeader rootClassName="client-header-root-class-name2"></ClientHeader>
      <div className="client-sign-up-client-main">
        <form className="client-sign-up-client-login-form">
          <input
            type="email"
            name="email"
            required
            autoFocus
            placeholder="E-mail"
            className="input auth-input client-sign-up-email"
          />
          <input
            type="password"
            placeholder="Password"
            className="input auth-input client-sign-up-password"
          />
          <input
            type="password"
            placeholder="Repeat password"
            className="input auth-input client-sign-up-reapeat-password"
          />
          <button type="button" className="client-sign-up-login-button button">
            <span className="client-sign-up-login-button-text">
              <span>Sign Up</span>
              <br></br>
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default ClientSignUp
