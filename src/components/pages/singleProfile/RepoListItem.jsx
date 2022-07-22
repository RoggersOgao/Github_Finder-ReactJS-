import React from 'react'
import {FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'
function RepoListItem({repo}) {

  const {
    name,
    html_url,
    forks,
    description,
    open_issues,
    watchers_count,
    stargazers_count,
    
  } = repo
  return (
    <div className="container">
        <div className="repoContainer">
          <div>
            <a href={html_url} className="repoContainer__repoName">
                <FaLink /> &nbsp; {name}
            </a>
            </div>
            <blockquote className='repoContainer__repoDescription'>
              {description}
            </blockquote>
            <div className="repoContainer__stats">
            <div className="repoContainer__stats__repoWatchers">
              <FaEye /> &nbsp;{watchers_count}
            </div>
            <div className="repoContainer__stats__stars">
              <FaStar /> &nbsp;{stargazers_count}
            </div>
            <div className="repoContainer__stats__issues">
              <FaInfo />&nbsp;{open_issues}
            </div>
            <div className="repoContainer__stats__forks">
              <FaUtensils />&nbsp; {forks}
            </div>
            </div>
            



        </div>
    </div>
  )
}

export default RepoListItem