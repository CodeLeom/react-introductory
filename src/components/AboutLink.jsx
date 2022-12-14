import React from 'react'
import {FaQuestionCircle} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function AboutLink() {
  return (
    <div className='about-link'>
        <Link to='/about'>
            <FaQuestionCircle size={40} />
        </Link>
    </div>
  )
}

export default AboutLink