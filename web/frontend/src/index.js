import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import AdminMain from './views/admin-main'
import ClientHome from './views/client-home'
import AdminCompanies from './views/admin-companies'
import AdminNewAdmin from './views/admin-new-admin'
import AdminNewEmployee from './views/admin-new-employee'
import AdminExportData from './views/admin-export-data'
import AdminNewCompany from './views/admin-new-company'
import AdminCompanyPage from './views/admin-company-page'
import AdminLogin from './views/admin-login'
import ClientLogin from './views/client-login'
import ClientSignUp from './views/client-sign-up'
import AdminLogout from './views/admin-logout'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={AdminMain} exact path="/admin/main" />
        <Route component={ClientHome} exact path="/" />
        <Route component={AdminCompanies} exact path="/admin/companies" />
        <Route component={AdminNewAdmin} exact path="/admin/new-admin" />
        <Route component={AdminExportData} exact path="/admin/export-data" />
        <Route component={AdminNewCompany} exact path="/admin/new-company" />
        <Route component={AdminCompanyPage} exact path="/admin/companies/:id" />
        <Route component={AdminNewEmployee} exact path="/admin/new-employee" />
        <Route component={AdminLogin} exact path="/admin/login" />
        <Route component={ClientLogin} exact path="/client/login" />
        <Route component={ClientSignUp} exact path="/client/signup" />
        <Route component={AdminLogout} exact path="/admin/logout" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
