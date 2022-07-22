
import { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import AlertContext from '../contexts/alerts/AlertContext';
import { searchUsers } from '../actions/Actions';
function Search() {

  const [text, setText] = useState('');
  

  //user context initialization

  const {users, dispatch} = useContext(UserContext)
  const {setAlert} = useContext(AlertContext)

  const handleSubmit = async (e) =>{
    e.preventDefault()
    if (text === ''){
      setAlert('Please enter something', 'error')
    }else{

      dispatch({
        type:'SET_LOADING',
      })
      // To do - search users
      setText(e.target.value)
      const users = await searchUsers(text)

      dispatch({
        type:'GET_USERS',
        payload:users,
      })
      setText('')
    }
  }
  const handleChange = (e) => {
    setText(e.target.value)
    
  }
  
  return (
    <div className="container">
        <div className="search">
            <form action="" className="search__form" onSubmit={handleSubmit}>

                <div className="search__form--input-group">
                    <input
                    type="text" 
                    name="" 
                    id="" 
                    placeholder="Search" 
                    value={text}
                    onChange={handleChange} 
                    />
                    <button type="submit">Go</button>
                </div>
                {users.length > 0 && (
                  <div className="search__form--clear">
                  <div onClick={()=>dispatch({
                    type:"CLEAR_SELECTION",
                  })} className="text">
                  Clear
                  </div>
                </div>
                )}
            </form>
        </div>
    </div>
  )
}

export default Search