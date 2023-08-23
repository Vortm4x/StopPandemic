import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet'

import AdminHeader from '../components/admin-header'
import AdminNavBar from '../components/admin-nav-bar'
import CompaniesTable from '../components/companies-table';
import CompaniesEvenRow from '../components/companies-even-row';
import CompaniesOddRow from '../components/companies-odd-row';
import ScreenText from '../components/screen-text';
import './admin-companies.css'

const AdminCompanies = (props) => {

  const isAuthenticated = !!localStorage.getItem('adminData');
  if(!isAuthenticated) {
    return <Redirect to={`/admin/login`}/>;
  }


  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Fetch companies data from the server
    fetch('/api/company')
      .then(response => response.json())
      .then(data => setCompanies(data))
      .catch(error => console.error('Error fetching companies data:', error));
  }, []);



  return (
    <div className="admin-companies-container">
      <Helmet>
        <title>AdminCompanies - STOPandemic</title>
        <meta property="og:title" content="AdminCompanies - STOPandemic" />
      </Helmet>
      <AdminHeader rootClassName="admin-header-root-class-name"></AdminHeader>
      <AdminNavBar rootClassName="admin-nav-bar-root-class-name"></AdminNavBar>
      <main className="admin-companies-admin-main">

      {companies.length === 0 ? (
          <ScreenText text="No companies found" />
        ) : (
          <CompaniesTable>
            {companies.map((company, index) => (
              index % 2 === 0 ? (
                <CompaniesEvenRow
                  company_id={company._id}
                  record_number={index + 1}
                  company_name={company.name}
                  company_address={company.address}
                  creation_date={company.creationDate.split('T')[0]}
                />
              ) : (
                <CompaniesOddRow
                  company_id={company._id}
                  record_number={index + 1}
                  company_name={company.name}
                  company_address={company.address}
                  creation_date={company.creationDate.split('T')[0]}
                />
              )
            ))}
          </CompaniesTable>
        )}

      </main>
    </div>
  )
}

export default AdminCompanies
