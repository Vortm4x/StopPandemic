import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './diseases-table.css'

const DiseasesTable = (props) => {
  return (
    <div className="diseases-table-container">
      <div className="diseases-table-employees-header">
        <div className="diseases-table-container1 table-cell table-heading-cell table-content-disease-cell">
          <span>
            <span>Name</span>
            <br></br>
          </span>
        </div>
        <div className="table-cell table-heading-cell">
          <span>
            <span>Description</span>
            <br></br>
          </span>
        </div>
      </div>
      {props.children}
      <div className="diseases-table-add-new" onClick={props.onNew}>
        <div className="table-cell table-heading-cell">
          <span className="diseases-table-text6">
            <span>Add new...</span>
            <br></br>
          </span>
        </div>
      </div>
    </div>
  )
}

DiseasesTable.defaultProps = {
  rootClassName: '',
  
}

DiseasesTable.propTypes = {
  rootClassName: PropTypes.string,
  onNew: PropTypes.func.isRequired,
}

export default DiseasesTable
