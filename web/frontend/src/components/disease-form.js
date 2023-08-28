import React, { useState } from 'react';
import PropTypes from 'prop-types'

import './disease-form.css'

const DiseaseForm = (props) => {

  const initialData = props.dataGetter();
  const [diseaseData, setDiseaseData] =
    initialData == null
      ? useState({
        name: '',
        description: '',
      })
      : useState(initialData);

  const handleDelete = () => {
    // Make a DELETE request to delete the disease using its ID
    fetch(`/api/disease?id=${diseaseData._id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(deletedDisease => {
        // Optionally, you can handle success response or close the modal
        console.log('Disease deleted:', deletedDisease);
        // Close the modal using the provided prop
        props.onRequestClose();
      })
      .catch(error => {
        console.error('Error deleting disease:', error);
        // Handle error or show error message
      });
  };

  return (
    <div className="disease-form-container">
      <form className="disease-form-form">
        <input
          type="text"
          required
          placeholder="Disease"
          value={diseaseData.name}
          onChange={(e) => setDiseaseData({ ...diseaseData, name: e.target.value })}
          className="input auth-input"
        />

        <textarea
          placeholder="Description"
          value={diseaseData.description}
          onChange={(e) => setDiseaseData({ ...diseaseData, description: e.target.value })}
          className="disease-form-textarea textarea auth-input"
        ></textarea>

        <div className="disease-form-container1">
          { initialData != null &&
            <button
              type="button"
              onClick={handleDelete}
              className="disease-form-delete-disease-button button"
            >
              <span className="disease-form-delete-desease-button-text">
                <span>Delete</span>
                <br></br>
              </span>
            </button>
          }

          <button
            type="button"
            onClick={() => props.handleRequest(diseaseData)}
            className="disease-form-submitt-disease-button button"
          >
            <span className="disease-form-submit-disease-button-text">
              <span>Submit</span>
              <br></br>
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}

DiseaseForm.defaultProps = {
  rootClassName: '',
  name: '',
  description: '',

}

DiseaseForm.propTypes = {
  rootClassName: PropTypes.string,
  handleRequest: PropTypes.func.isRequired,
  dataGetter: PropTypes.func.isRequired,
}

export default DiseaseForm
