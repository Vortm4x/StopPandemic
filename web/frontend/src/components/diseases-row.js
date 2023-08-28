import React from 'react'

import PropTypes from 'prop-types'

import './diseases-row.css'

const DiseasesRow = (props) => {
  return (
    <div className="diseases-row-container">
      <button className="diseases-row-container1 table-cell table-content-disease-cell" onClick={() => props.updateCallback(props) }>
        <span>{props.name}</span>
      </button>
      <div className="table-cell" >
        <span className="diseases-row-text1">{props.description}</span>
      </div>
    </div>
  )
}

DiseasesRow.defaultProps = {
  rootClassName: '',
  name: 'DISEASE',
  description: 'DESCRIPTION',
  id: 'NULL'
}

DiseasesRow.propTypes = {
  rootClassName: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  updateCallback: PropTypes.func.isRequired,
}

export default DiseasesRow
