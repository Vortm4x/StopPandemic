import React from 'react'
import { Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet'

import ClientHeader from '../components/client-header'
import './client-home.css'

const ClientHome = (props) => {
  return (
    <div className="client-home-container">
      <Helmet>
        <title>STOPandemic</title>
        <meta property="og:title" content="STOPandemic" />
      </Helmet>
      <ClientHeader rootClassName="client-header-root-class-name"></ClientHeader>
      <div className="client-home-client-main"></div>
    </div>
  )
}

export default ClientHome
