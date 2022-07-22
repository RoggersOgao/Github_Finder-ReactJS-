import React from 'react'
import {useEffect,useContext} from 'react'
import UserContext from '../../contexts/UserContext'
import { getUserAndRepos } from '../../actions/Actions'
import { FaCodepen, FaStore, FaUserFriends, FaUsers,FaArrowLeft, FaGithub } from 'react-icons/fa'

import {useParams} from 'react-router-dom'
import Spinner from '../../Spinner'
import {Link} from 'react-router-dom'
import RepoList from './RepoList'
function Profile() {

    const { user, loading, repo, dispatch} = useContext(UserContext)

const params = useParams()
    useEffect(()=>{
        // getUser(params.login)
        // fetchRepos(params.login)

        dispatch({
            type:'SET_LOADING'
        })
        const getUserData = async()=>{
            const userData = await getUserAndRepos(params.login)
            dispatch({
                type:'GET_USER_AND_REPOS',
                payload:userData
            })
        }
        getUserData()
      

    },[dispatch, params.login])

    if(loading){
        return <Spinner />
    }

//destructing of users

const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company,
    email,
} = user


  return (
    <div className="container">
        <div className="profile">
            <div className="profile__header">
                {/* first row */}
                <div className="profile__header--row1">
                    <Link to='/' className="back"><FaArrowLeft /> &nbsp; Back</Link>

                    <img src={avatar_url} alt="" className="avatar" />
                    <div className="avatar__text">
                        <p className="name">{name}</p>
                        <p className="username">{login}</p>
                    </div>
                </div>

                {/* second row */}
                <div className="row2">
                    <div className="row2__nameContainer">
                    <div className="name">{name}</div>
                    <div className="type">{type}</div>
                    <div className="hire">{email &&(
                        <div className="hire">email</div>
                    )}</div>
                    </div>
                    <div className="row2__bio">{bio}</div>

                    <Link to={{pathname:`${html_url}`}}className="row2__github-profile"> 
                        <a href={html_url} className="icon"><FaGithub size={18}/> &nbsp;&nbsp;Profile</a>
                        
                    </Link>

                   {/* row 2 */}
                   <div className="row2__informationContainer">
                        <div className="location">
                            <p className="location__heading">
                                Location
                            </p>
                            <div className="location__text">{location}
                            </div>
                        </div>
                        <div className="company">
                            <p className="company__heading">
                                Company
                            </p>
                            <div className="company__text">
                                {company}
                            </div>
                        </div>
                        <div className="twitter">
                            <p className="twitter__heading">
                                Twitter
                            </p>
                            <div className="twitter__text">
                            {twitter_username}
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* End of header in single page */}



            <div className="profile__stats">
                <div className="stats">
                    <div className="stats__followers">
                        <div className="row1">
                            <div className="heading">Followers</div>
                            <div className="text">{followers}</div>
                        </div>
                        <div className="row2">
                            <FaUserFriends />
                        </div>
                    </div>
                    <div className="stats__following">
                        <div className="row1">
                        <div className="heading">Following</div>
                        <div className="text">{following}</div>
                        </div>
                        <div className="row2">
                                <FaUsers />
                        </div>
                    </div>
                    <div className="stats__public_repos">
                        <div className="row1">
                        <div className="heading">Public Repos</div>
                        <div className="text">{public_repos}</div>
                        </div>
                        <div className="row2">
                            <FaCodepen />
                        </div>
                    </div>
                    <div className="stats__public_gists">
                        <div className="row1">
                        <div className="heading">Public Gists</div>
                        <div className="text">{public_gists}</div>
                        </div>
                        <div className="row2">
                            <FaStore />
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile__repos">

                {/* to do repo list */}
                <RepoList repos={repo}/>
            </div>
        </div>
    </div>
  )
}

export default Profile