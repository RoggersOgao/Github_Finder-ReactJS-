import React from 'react'
import {FaScrewdriver, FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'
function NotFound() {
  return (
    <div className="container">
        <div className="notFound">
            <div className="notFound__heading">
                <div className="spanner">
                <FaScrewdriver size={150}/>
                    <div className="notFound__heading--text">Oops!!</div>
                </div>
            </div>
            <div className="notFound__error">
                404 - Page Not Found!
            </div>
            <Link to='/' className="notFound__link">
                <FaHome /> &nbsp; Go Back
            </Link>
        </div>
    </div>
  )
}

export default NotFound