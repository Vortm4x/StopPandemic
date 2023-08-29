import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'

import ClientHeader from '../components/client-header'
import ClientNavBar from '../components/client-nav-bar'
import './client-health-report.css'

const ClientHealthReport = (props) => {

  const isAuthenticated = !!localStorage.getItem('clientData');
  if (!isAuthenticated) {
    return <Redirect to={`/client/login`} />;
  }

  const clientData = JSON.parse(localStorage.getItem('clientData'));

  const [diseases, setDiseases] = useState([]);
  const [selectedDisease, setSelectedDisease] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    // Fetch the list of diseases and update the state
    fetch('/api/disease') // Replace with the actual endpoint
      .then(response => response.json())
      .then(data => {
        setDiseases(data);
      })
      .catch(error => {
        console.error('Error fetching diseases:', error);
      });
  }, []);


  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleDiseaseChange = (event) => {
    setSelectedDisease(event.target.value);
  };

  const handleSubmit = () => {
    const requestData =
      (selectedDisease != '')
        ? {
          date,
          diseaseId: selectedDisease,
          employeeId: clientData._id,
          companyId: clientData.company._id,
        }
        : {
          date,
          employeeId: clientData._id,
          companyId: clientData.company._id,
        };

    fetch('/api/health-report/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Health report added:', data);

      })
      .catch(error => {
        console.error('Error adding health report:', error);
        // Handle error if needed
      });
  };

  return (
    <div className="client-health-report-container">
      <Helmet>
        <title>ClientHealthReport - STOPandemic</title>
        <meta property="og:title" content="ClientHealthReport - STOPandemic" />
      </Helmet>
      <ClientHeader rootClassName="client-header-root-class-name4"></ClientHeader>
      <ClientNavBar rootClassName="client-nav-bar-root-class-name2"></ClientNavBar>
      <div className="client-health-report-client-main">
        <form className="client-health-report-health-report-form">
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={handleDateChange}
            className="client-health-report-date input auth-input"
          />
          <select
            className="client-health-report-disease auth-input input"
            value={selectedDisease}
            onChange={handleDiseaseChange}
          >
            <option value={''} selected>None</option>
            {
              diseases.map(disease => (
                <option
                  value={disease._id}
                >
                  {disease.name}
                </option>
              ))
            }
          </select>
          <button
            type="button"
            className="client-health-report-submit-button button"
            onClick={handleSubmit}
          >
            <span className="client-health-report-submit-button-text">
              <span>Submit</span>
              <br></br>
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default ClientHealthReport
