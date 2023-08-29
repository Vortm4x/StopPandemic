import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'

import ClientHeader from '../components/client-header'
import ClientNavBar from '../components/client-nav-bar'
import './client-statistics.css'

const ClientStatistics = (props) => {

  const isAuthenticated = !!localStorage.getItem('clientData');
  if (!isAuthenticated) {
    return <Redirect to={`/client/login`} />;
  }

  const clientData = JSON.parse(localStorage.getItem('clientData'));

  const [diseases, setDiseases] = useState([]);

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


  const [selectedDisease, setSelectedDisease] = useState('');
  const [date, setDate] = useState('');
  const [stats, setStats] = useState(null);

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


  const getCondition = (percent) => {

    if (percent < 5) {
      return 'Safe - Very few reported cases, minimal risk of transmission.';
    } else if (percent < 10) {
      return 'Low Risk - Minimal reported cases, low risk of transmission.';
    } else if (percent < 15) {
      return 'Moderate Risk - Some reported cases, moderate risk of transmission.';
    } else if (percent < 25) {
      return 'High Risk - Significant reported cases, high risk of transmission.';
    } else {
      return 'Critical - Severe outbreak, critical risk of transmission.';
    }
  };

  const getPercents = () => {
    return (100 * stats.reportedEmployees / stats.totalEmployees)
  }

  const handleDateChange = (event) => {
    setDate(event.target.value);

    if(event.target.value != '' && selectedDisease != '') {
      updateStats(event.target.value, selectedDisease, clientData.company._id);
    }
    else {
      setStats(null);
    }
  };

  const handleDiseaseChange = (event) => {
    setSelectedDisease(event.target.value);

    if(date != '' && event.target.value != '') {
      updateStats(date, event.target.value, clientData.company._id);
    }
    else {
      setStats(null);
    }
  };

  const updateStats = (date, selectedDisease, companyId) => {
    fetch(`/api/health-report?date=${date}&diseaseId=${selectedDisease}&companyId=${companyId}`)
    .then(response => response.json())
    .then(data => {
      setStats(data);
    })
    .catch(error => {
      console.error('Error fetching health report statistics:', error);
      // Handle error if needed
    });
  };

  return (
    <div className="client-statistics-container">
      <Helmet>
        <title>ClientStatistics - STOPandemic</title>
        <meta property="og:title" content="ClientStatistics - STOPandemic" />
      </Helmet>
      <ClientHeader rootClassName="client-header-root-class-name5"></ClientHeader>
      <ClientNavBar rootClassName="client-nav-bar-root-class-name3"></ClientNavBar>
      <div className="client-statistics-client-main">
        <div className="client-statistics-container1">
          <div className="client-statistics-container2">
            <span className="client-statistics-text company-info-text company-info-title">
              Date
            </span>
            <input
              type="date"
              placeholder="Date"
              value={date}
              onChange={handleDateChange}
              className="client-statistics-date input auth-input"
            />
          </div>
          <div className="client-statistics-container3">
            <span className="client-statistics-text1 company-info-text company-info-title">
              Disease
            </span>
            <select
              name="Disease"
              className="client-statistics-select input auth-input"
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
          </div>

          {
            stats != null &&
            <div className="client-statistics-container4">
              <span className="client-statistics-text2 company-info-text company-info-title">
                Sick
              </span>
              <span className="client-statistics-text3 company-info-text">
                { getPercents().toFixed(2) } %
              </span>
            </div>
          }
          {
            stats != null &&
            <div className="client-statistics-container5">
              <span className="client-statistics-text4 company-info-text company-info-title">
                Condition
              </span>
              <span className="client-statistics-text5 company-info-text">
                {getCondition(getPercents())}
              </span>

            </div>
          }

        </div>
      </div>
    </div>
  )
}

export default ClientStatistics
