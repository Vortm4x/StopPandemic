import React from 'react'
import ReactDOM from 'react-dom'
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'

import AdminMain from './views/admin-main'
import AdminCompanies from './views/admin-companies'
import AdminNewAdmin from './views/admin-new-admin'
import AdminNewEmployee from './views/admin-new-employee'
import AdminEmployeePage from './views/admin-employee-page'
import AdminExportData from './views/admin-export-data'
import AdminNewCompany from './views/admin-new-company'
import AdminCompanyPage from './views/admin-company-page'
import AdminDiseases from './views/admin-diseases'
import AdminLogin from './views/admin-login'
import AdminLogout from './views/admin-logout'

import ClientHome from './views/client-home'
import ClientLogin from './views/client-login'
import ClientLogout from './views/client-logout'
import ClientCompanyPage from './views/client-company-page'
import ClientHealthReport from './views/client-health-report'
import ClientStatistics from './views/client-statistics'



const App = () => {
  return (
    <Router>
      <div>
        <Route component={<Redirect to={`/client/main`}/> } exact path="/" />

        <Route component={AdminMain} exact path="/admin/main" />
        <Route component={AdminCompanies} exact path="/admin/companies" />
        <Route component={AdminNewAdmin} exact path="/admin/new-admin" />
        <Route component={AdminExportData} exact path="/admin/export-data" />
        <Route component={AdminNewCompany} exact path="/admin/new-company" />
        <Route component={AdminCompanyPage} exact path="/admin/companies/:id" />
        <Route component={AdminNewEmployee} exact path="/admin/new-employee" />
        <Route component={AdminEmployeePage} exact path="/admin/employee/:id" />
        <Route component={AdminDiseases} exact path="/admin/diseases" />
        <Route component={AdminLogin} exact path="/admin/login" />
        <Route component={AdminLogout} exact path="/admin/logout" />

        <Route component={ClientHome} exact path="/client/main" />
        <Route component={ClientLogin} exact path="/client/login" />
        <Route component={ClientLogout} exact path="/client/logout" />
        <Route component={ClientCompanyPage} exact path="/client/company" />
        <Route component={ClientHealthReport} exact path="/client/health-report" />
        <Route component={ClientStatistics} exact path="/client/statistics" />


      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
