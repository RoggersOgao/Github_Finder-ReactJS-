import React,{useContext} from 'react'
import Spinner from '../Spinner';
import UserItem from './UserItem';
import UserContext from '../contexts/UserContext';
function Users() {
    
const {loading,users} = useContext(UserContext)

    if(!loading){
  return (
    <div className="container">
        <div className="users">
            {users.map((item,index)=>(
                <UserItem key={index} user={item}/>
            ))}
        </div>
    </div>
  )
}else{
    return <Spinner />
}

}

export default Users