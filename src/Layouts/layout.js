import React from 'react'
import PropTypes from 'prop-types'

const TemplateWrapper = ({ children }) => {
  return <div>{children}</div>
}

TemplateWrapper.propTypes = {
  children: PropTypes.object
}

export default TemplateWrapper
