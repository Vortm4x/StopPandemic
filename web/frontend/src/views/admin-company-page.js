import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet'

import AdminHeader from '../components/admin-header'
import AdminNavBar from '../components/admin-nav-bar'
import EmployeesTable from '../components/employees-table'
import EmployeesEvenRow from '../components/employees-even-row'
import EmployeesOddRow from '../components/employees-odd-row'
import ScreenText from '../components/screen-text'
import './admin-company-page.css'

const AdminCompanyPage = (props) => {

  // Get the company_id from URL

  const [companyData, setCompanyData] = useState(null);
  const [employees, setEmployees] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // Fetch company data based on company_id

    const currentUrl = window.location.href;
    const segments = currentUrl.split('/');
    const company_id = segments[segments.length - 1];

    fetch(`/api/company?id=${company_id}`)
      .then(response => response.json())
      .then(data => {
        setCompanyData(data);

        fetch(`/api/employee?company_id=${data._id}`)
          .then(response => response.json())
          .then(data => setEmployees(data))
          .catch(error => console.error('Error fetching employees:', error));
      })
      .catch(error => console.error('Error fetching company data:', error));
  }, []);

  if (!companyData) {
    return (
      <ScreenText text="Loading..." />
    );
  }

  const handleSubmit = () => {
    // Make PUT request to update company data
    fetch(`/api/company?id=${companyData._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(companyData),
    })
      .then(response => response.json())
      .then(updatedCompany => {
        // Optionally, you can update the state or show a success message
        console.log('Company data updated:', updatedCompany);
      })
      .catch(error => console.error('Error updating company data:', error));
  };

  const handleDelete = () => {

    // Delete company and its employees
    fetch(`/api/company?id=${companyData._id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(deletedResponse => {
        console.log(deletedResponse.message);
        
        employees.forEach(employee => {
          fetch(`/api/employee?id=${employee._id}`, {
            method: 'DELETE',
          })
            .then(employeeDeletedResponse => employeeDeletedResponse.json())
            .then(deletedEmployeeResponse => {
              console.log(deletedEmployeeResponse.message);
            })
            .catch(error => {
              console.error('Error deleting employee:', error);
            });
        });
  
        history.push('/admin/companies');
      })
      .catch(error => {
        console.error('Error deleting company:', error);
      });
  };


  return (
    <div className="admin-company-page-container">
      <Helmet>
        <title>AdminCompanyPage - STOPandemic</title>
        <meta property="og:title" content="AdminCompanyPage - STOPandemic" />
      </Helmet>
      <AdminHeader rootClassName="admin-header-root-class-name5"></AdminHeader>
      <AdminNavBar rootClassName="admin-nav-bar-root-class-name4"></AdminNavBar>
      <main className="admin-company-page-admin-main">
        <form className="admin-company-page-form">
          <input
            type="text"
            required
            placeholder="Company name"
            className="input auth-input"
            value={companyData.name}
            onChange={e => setCompanyData({ ...companyData, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Address"
            className="input auth-input"
            value={companyData.address}
            onChange={e => setCompanyData({ ...companyData, address: e.target.value })}
          />
          <textarea
            placeholder="About company"
            className="admin-company-page-textarea textarea auth-input"
            value={companyData.description}
            onChange={e => setCompanyData({ ...companyData, description: e.target.value })}
          ></textarea>
          <div className="admin-company-page-container1">
            <button
              type="button"
              className="admin-company-page-delete-company-button button"
              onClick={handleDelete}
            >
              <span className="admin-company-page-delete-company-button-text">
                <span>Delete</span>
                <br></br>
              </span>
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="admin-company-page-submit-company-button button"
            >
              <span className="admin-company-page-submit-company-button-text">
                <span>Submit</span>
                <br></br>
              </span>
            </button>
          </div>
        </form>
        <EmployeesTable rootClassName="employees-table-root-class-name" company_id={companyData._id}>
          {employees.map((employee, index) => (
            index % 2 === 0 ? (
              <EmployeesEvenRow
                employee_id={employee._id}
                record_number={index + 1}
                fullname={employee.fullname}
                email={employee.email}
                phone={employee.phone}
                position={employee.position}
              />
            ) : (
              <EmployeesOddRow
                employee_id={employee._id}
                record_number={index + 1}
                fullname={employee.fullname}
                email={employee.email}
                phone={employee.phone}
                position={employee.position}
              />
            )
          ))}
        </EmployeesTable>
      </main>
    </div>
  )
}

export default AdminCompanyPage
