import React from 'react'
import Search from '../../users/Search';
import Users from '../../users/Users';
import Alert from '../../alerts/Alert';
function Home() {
  return (
    <div className="container">
        <div className="home">
            <div className="home__usersList">
              <Alert />
              <Search />
                <Users />
            </div>
        </div>
    </div>
  )
}

export default Home