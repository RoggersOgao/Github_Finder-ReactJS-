import React from 'react'
import RepoListItem from './RepoListItem';

function RepoList({repos}) {

  return (
    <div className="container">
    {repos.map((items,index)=>(
      <RepoListItem repo={items} key={index}/>
    ))}
    </div>
  )
}

export default RepoList