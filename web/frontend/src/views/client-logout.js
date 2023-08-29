import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import { Redirect } from "react-router-dom";

import ClientHeader from '../components/client-header'
import ClientNavBar from '../components/client-nav-bar'
import ScreenText from '../components/screen-text'
import './client-logout.css'

const ClientLogout = (props) => {

  const isAuthenticated = !!localStorage.getItem('clientData');
  if(!isAuthenticated) {
    return <Redirect to={`/client/login`}/>;
  }

  const history = useHistory();

  useEffect(() => {
    // Clear adminData from local storage
    localStorage.removeItem('clientData');

    // Redirect to the login page
    history.push('/client/login');
  }, [history]);

  return (
    <div className="client-logout-container">
      <Helmet>
        <title>ClientLogout - STOPandemic</title>
        <meta property="og:title" content="ClientLogout - STOPandemic" />
      </Helmet>
      <ClientHeader rootClassName="client-header-root-class-name7"></ClientHeader>
      <ClientNavBar rootClassName="client-nav-bar-root-class-name5"></ClientNavBar>
      <div className="client-logout-client-main">
        <ScreenText rootClassName="screen-text-root-class-name3"></ScreenText>
      </div>
    </div>
  )
}

export default ClientLogout
