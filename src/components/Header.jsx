import PropTypes from 'prop-types'

function Header({text, bgColor, textColor}) {
    const headerStyle = {
        backgroundColor: bgColor,
        color: textColor,
    }

  return (
    <header style= {headerStyle} >
        <div>
            <h1>{text}</h1>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Happy New Month Ladies!',
    bgColor: 'teal',
    textColor: '#7cc5da'
}

Header.propTypes = {
    text: PropTypes.string,
}

export default Header

