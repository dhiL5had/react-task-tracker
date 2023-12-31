import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
  return <button style={{ backgroundColor: color}} className='btn' onClick={onClick}>{text}</button>
}

Button.defaultProps = {
  color: 'steelblue',
  text: 'Action'
}

Button.prototype = {
  color: PropTypes.string,
  text: PropTypes.string
}

export default Button