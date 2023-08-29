import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet'

import ClientHeader from '../components/client-header'
import ClientNavBar from '../components/client-nav-bar'
import CompanyInfo from '../components/company-info'
import EmployeesHeader from '../components/employees-header'
import EmployeesRow from '../components/employees-client-row'

import './client-company-page.css'

const ClientCompanyPage = (props) => {

  const isAuthenticated = !!localStorage.getItem('clientData');
  if (!isAuthenticated) {
    return <Redirect to={`/client/login`} />;
  }

  const clientData = JSON.parse(localStorage.getItem('clientData'));

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch the list of employees and update the state
    fetch(`/api/employee?company_id=${clientData.company._id}`) // Replace with the actual endpoint
      .then(response => response.json())
      .then(data => {
        setEmployees(data);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
      });
  }, []);



  return (
    <div className="client-company-page-container">
      <Helmet>
        <title>ClientCompanyPage - STOPandemic</title>
        <meta property="og:title" content="ClientCompanyPage - STOPandemic" />
      </Helmet>
      <ClientHeader rootClassName="client-header-root-class-name3"></ClientHeader>
      <ClientNavBar rootClassName="client-nav-bar-root-class-name1"></ClientNavBar>
      <div className="client-company-page-client-main">

        <CompanyInfo
          company={clientData.company.name}
          address={clientData.company.address}
          description={clientData.company.description}
        />

        <div className="client-company-page-container1">
          <EmployeesHeader></EmployeesHeader>
          {
            employees.map((employee, index) => (
              <EmployeesRow
                record_number={index + 1}
                fullname={employee.fullname}
                email={employee.email}
                phone={employee.phone}
                position={employee.position}
              />
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default ClientCompanyPage
