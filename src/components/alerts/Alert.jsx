import React from 'react'
import {useContext} from 'react'
import { FaTimesCircle } from 'react-icons/fa'
import AlertContext from '../contexts/alerts/AlertContext'
function Alert() {
    const {alert} = useContext(AlertContext)
    
    
  return ( alert !== null && (
    <div className="container">
        <div className="margin"></div>
        <div className="alert">
            {alert.type === 'error' &&(
                <p className="text">
                    <FaTimesCircle /> &nbsp;
                    {alert.mesg}
                </p>

            )}
        </div>
    </div>
  )
  )
}

export default Alert