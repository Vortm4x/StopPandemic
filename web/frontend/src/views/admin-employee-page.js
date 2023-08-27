import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

import { Helmet } from 'react-helmet'

import CompanyLogo from '../components/company-logo'
import CompanyTitle from '../components/company-title'
import AdminNavBar from '../components/admin-nav-bar'
import ScreenText from '../components/screen-text'
import './admin-employee-page.css'

const AdminEmployeePage = (props) => {

  const [employeeData, setEmployeeData] = useState(null);
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const history = useHistory();

  useEffect(() => {

    const currentUrl = window.location.href;
    const segments = currentUrl.split('/');
    const employee_id = segments[segments.length - 1];

    // Fetch employee data based on the extracted employee ID
    fetch(`/api/employee?id=${employee_id}`)
      .then(response => response.json())
      .then(data => {
        setEmployeeData(data);
      })
      .catch(error => console.error('Error fetching employee data:', error));
  }, []);


  if (!employeeData) {
    return (
      <ScreenText text="Loading..." />
    );
  }

  const handleSubmit = () => {


    if (password !== repeatPassword) {
      console.log("Passwords don't match");
      return;
    }

    const updatedEmployeeData = {
      ...employeeData,
      password, // Set the new password
    };

    // Make PUT request to update employee data
    fetch(`/api/employee?id=${employeeData._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEmployeeData),
    })
      .then(response => response.json())
      .then(updatedEmployee => {
        console.log('Employee data updated:', updatedEmployee);
        history.push(`/admin/companies/${updatedEmployee.company}`);
        // Optionally, you can show a success message or redirect
      })
      .catch(error => {
        console.error('Error updating employee data:', error);
      });
  };

  const handleDelete = () => {

    fetch(`/api/employee?id=${employeeData._id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(deletedResponse => {
        console.log(deletedResponse.message);
        // Redirect to a different page, e.g., the list of employees
        history.push(`/admin/companies/${employeeData.company}`);
      })
      .catch(error => {
        console.error('Error deleting employee:', error);
      });
  };


  return (


    <div className="admin-employee-page-container">
      <Helmet>
        <title>AdminEmployeePage - STOPandemic</title>
        <meta property="og:title" content="AdminEmployeePage - STOPandemic" />
      </Helmet>
      <header className="admin-employee-page-admin-header">
        <Link to="/admin/main" className="admin-employee-page-navlink">
          <div className="admin-employee-page-logo-title">
            <CompanyLogo rootClassName="company-logo-root-class-name10"></CompanyLogo>
            <CompanyTitle rootClassName="company-title-root-class-name10"></CompanyTitle>
          </div>
        </Link>
        <span className="admin-employee-page-header-name header-text">
          Admin dashboad
        </span>
      </header>
      <AdminNavBar></AdminNavBar>
      <main className="admin-employee-page-admin-main">
        <form className="admin-employee-page-form">
          <input
            type="text"
            required
            placeholder="Fullname"
            className="input auth-input"
            value={employeeData.fullname}
            onChange={e => setEmployeeData({ ...employeeData, fullname: e.target.value })}
          />
          <input
            type="email"
            placeholder="E-mail"
            className="input auth-input"
            value={employeeData.email}
            onChange={e => setEmployeeData({ ...employeeData, email: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Phone"
            className="input auth-input"
            value={employeeData.phone}
            onChange={e => setEmployeeData({ ...employeeData, phone: e.target.value })}
          />
          <input
            type="text"
            placeholder="Position"
            className="input auth-input"
            value={employeeData.position}
            onChange={e => setEmployeeData({ ...employeeData, position: e.target.value })}
          />
          <input
            type="password"
            placeholder="New Password"
            className="input auth-input"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Repeat Password"
            className="input auth-input"
            value={repeatPassword}
            onChange={e => setRepeatPassword(e.target.value)}
          />

          <div className="admin-employee-page-container1">
            <button
              type="button"
              className="admin-employee-page-delete-employee-button button"
              onClick={handleDelete}
            >
              <span className="admin-employee-page-delete-employee-button-text">
                <span>Delete</span>
                <br></br>
              </span>
            </button>
            <button
              type="button"
              className="admin-employee-page-submit-employee-button button"
              onClick={handleSubmit}
            >
              <span className="admin-employee-page-submit-employee-button-text">
                <span>Submit</span>
                <br></br>
              </span>
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default AdminEmployeePage
