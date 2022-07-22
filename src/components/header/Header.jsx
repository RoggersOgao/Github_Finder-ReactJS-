import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
function Header({title}) {
  return (
    <div className="container">
      <div className="header">
        <div className="header__logo">
          <FaGithub size={20}/> &nbsp; {title}
        </div>

        <div className="header__link">
          <Link to="/" className="header__link--home">Home</Link>
          <Link to="/about" className="header__link--about">About</Link>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  title:'Github Finder'
}
Header.propTypes ={
  title:PropTypes.string
}

export default Header