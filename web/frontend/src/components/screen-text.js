import React from 'react'

import PropTypes from 'prop-types'

import './screen-text.css'

const ScreenText = (props) => {
  return (
    <div className={`screen-text-container ${props.rootClassName} `}>
      <span className="screen-text">{props.text}</span>
    </div>
  )
}

ScreenText.defaultProps = {
  text: 'TEXT',
  rootClassName: '',
}

ScreenText.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ScreenText
