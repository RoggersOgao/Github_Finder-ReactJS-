import { createContext, useReducer} from "react";
import userReducer from "./UserReducer";
///initialize the context

const UserContext = createContext()

//create the provider

export const UserProvider = ({children}) => {
    //initialize the states
    const initializeState ={
        users: [],
        user:{},
        repo:[],
        loading: false,
    }

    //initialize the reducer

    const [state, dispatch] = useReducer(userReducer, initializeState)
  
        // useEffect(()=>{
        //     getUsers()
        // })

        // // Set loading

        // const setLoading = () => dispatch({
        //     type:'SET_LOADING'
        // })



        // ///creating a function to clear the state
        // const handleClear = () => dispatch({
        //     type:'CLEAR_SELECTION',
            
        // })

    return <UserContext.Provider value={{
        // users: state.users,
        // loading: state.loading,
        // user:state.user,
        // repo:state.repo,
        ...state, //pass them all from the reducer like this
        dispatch,
        // searchUsers,
        // handleClear,
        // getUser,
        // fetchRepos,

    }}>
        {children}
    </UserContext.Provider>
}

export default UserContext