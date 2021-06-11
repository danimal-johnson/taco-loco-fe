import PropTypes from 'prop-types';

const Button = ({ onClick, text, color }) => {
  return (
    <button
      onclick={onClick}
      style={{ backgroundColor: color }}
      className='btn'
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  color: PropTypes.string
}

export default Button;
