import React from 'react'
import { Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet'

import ClientHeader from '../components/client-header'
import ClientNavBar from '../components/client-nav-bar'
import ScreenText from '../components/screen-text'
import './client-home.css'

const ClientHome = (props) => {

  const isAuthenticated = !!localStorage.getItem('clientData');
  if(!isAuthenticated) {
    return <Redirect to={`/client/login`}/>;
  }

  const clientData = JSON.parse(localStorage.getItem('clientData'));

  return (
    <div className="client-home-container">
      <Helmet>
        <title>STOPandemic</title>
        <meta property="og:title" content="STOPandemic" />
      </Helmet>
      <ClientHeader rootClassName="client-header-root-class-name"></ClientHeader>
      <ClientNavBar rootClassName="client-nav-bar-root-class-name"></ClientNavBar>
      <div className="client-home-client-main">
        <ScreenText
          rootClassName="screen-text-root-class-name2"
          text={`Wellcome, ${clientData.fullname}`}
        ></ScreenText>
      </div>
    </div>
  )
}

export default ClientHome
