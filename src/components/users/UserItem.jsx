import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
function UserItem({user:{login, avatar_url}}) {
  return (
    <div className="container">
        <div className="userCard">
            <div className="userCard__avatar">
            <img src={avatar_url} alt="" className="userCard__avatar--image" />
            </div>
            <div className="userCard__Text">
                <div className="userCard__text--name">
                    {login}
                </div>
                <div className="userCard__text--visit-profile">
                    <Link to={`/users/${login}`} className="link">visit profile</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

UserItem.propTypes={
    user:PropTypes.object.isRequired,
}
export default UserItem