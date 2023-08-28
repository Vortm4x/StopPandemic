import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import { Helmet } from 'react-helmet'

import CompanyLogo from '../components/company-logo'
import CompanyTitle from '../components/company-title'
import AdminNavBar from '../components/admin-nav-bar'
import DiseasesTable from '../components/diseases-table'
import DiseasesRow from '../components/diseases-row'
import DiseaseForm from '../components/disease-form';

import './admin-diseases.css'


const AdminDiseases = (props) => {

  const modalStyle = {
    content: {
      border: 'none', // Remove border
      background: 'transparent', // Remove background color
      padding: '0', // Remove padding
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },

  };

  const [diseases, setDiseases] = useState([]);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [diseaseData, setDiseaseData] = useState(null);

  const updateDiseases = () => {
    // Fetch all diseases
    fetch('/api/disease')
      .then(response => response.json())
      .then(data => setDiseases(data))
      .catch(error => console.error('Error fetching diseases:', error));
  };

  useEffect(() => {
    updateDiseases();
  }, []);

  const onNew = () => {
    setIsNewModalOpen(true);
  };



  const handleCreate = (diseaseData) => {

    // Make a POST request using the formData object
    fetch('/api/disease/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(diseaseData),
    })
      .then(response => response.json())
      .then(savedDisease => {
        // Optionally, you can handle success response or close the modal
        console.log('Disease added:', savedDisease);
        // Close the modal using the provided prop

        updateDiseases();
        setIsNewModalOpen(false);
      })
      .catch(error => {
        console.error('Error adding disease:', error);
        // Handle error or show error message
      });
  }


  const handleUpdate = (diseaseData) => {
    fetch(`/api/disease?id=${diseaseData._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(diseaseData),
    })
      .then(response => response.json())
      .then(updatedDisease => {
        // Optionally, you can handle success response or close the modal
        console.log('Disease updated:', updatedDisease);
        // Close the modal using the provided prop

        setDiseaseData(null);
        updateDiseases();
        setIsUpdateModalOpen(false);
      })
      .catch(error => {
        console.error('Error updating disease:', error);
        // Handle error or show error message
      });
  }

  const updateCallback = (props) => {
    setDiseaseData({
      name: props.name,
      description: props.description,
      _id: props.id
    });

    setIsUpdateModalOpen(true);
  }

  const getDiseaseData = () => {
    return diseaseData;
  } 

  return (
    <div className="admin-diseases-container">
      <Helmet>
        <title>AdminDiseases - STOPandemic</title>
        <meta property="og:title" content="AdminDiseases - STOPandemic" />
      </Helmet>
      <header className="admin-diseases-admin-header">
        <Link to="/admin/main" className="admin-diseases-navlink">
          <div className="admin-diseases-logo-title">
            <CompanyLogo rootClassName="company-logo-root-class-name11"></CompanyLogo>
            <CompanyTitle rootClassName="company-title-root-class-name11"></CompanyTitle>
          </div>
        </Link>
        <span className="admin-diseases-header-name header-text">
          Admin dashboad
        </span>
      </header>
      <AdminNavBar></AdminNavBar>
      <main className="admin-diseases-admin-main">

        <DiseasesTable
          onNew={onNew}
        >
          {diseases.map((disease) => (
            <DiseasesRow
              name={disease.name}
              description={disease.description}
              id={disease._id}
              updateCallback={updateCallback}
            />
          ))}
        </DiseasesTable>

        {<Modal style={modalStyle}
          isOpen={isNewModalOpen}
        >
          <DiseaseForm
            handleRequest={handleCreate}
            dataGetter={getDiseaseData}
          />

        </Modal>}

        {<Modal style={modalStyle}
          isOpen={isUpdateModalOpen}
        >
          <DiseaseForm
            handleRequest={handleUpdate}
            dataGetter={getDiseaseData}
          />

        </Modal>}



      </main>
    </div>
  )
}

export default AdminDiseases
