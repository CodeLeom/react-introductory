import PropTypes from 'prop-types'

function Header({text, bgColor, textColor}) {
    const headerStyle = {
        backgroundColor: bgColor,
        color: textColor,
    }

  return (
    <header style= {headerStyle} className='container'>
        <div>
            <h1>{text}</h1>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Review Application',
    bgColor: 'teal',
    textColor: '#7cc5da'
}

Header.propTypes = {
    text: PropTypes.string,
}

export default Header

