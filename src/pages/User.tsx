import React from 'react';
import {useEffect, useContext} from 'react'
import GithubContext from '../context/GithubContext';
import { useParams } from 'react-router-dom';
import UserRepos from '../components/users/UserRepos';

const User = () => {
    
    const {user, repos, getUserData, getUserRepo} = useContext(GithubContext)
    const params = useParams()
    const username : string = params.login as string

    
    useEffect(() => {
         getUserData(username)
         getUserRepo(username)
    }, [])
    
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
          } = user
   
    return (
      <div className="card">
        <div className="card-body">
           <img className="img-avatar" src= {avatar_url} alt=''/>
           <h4 className="card-title">{login}</h4>
           <p className = "card-text">{bio}</p>
           <a href={html_url} target="blank" className="card-text">Visit Github Profie</a>
         </div>
       
       <UserRepos repos = {repos}/>
      </div>
        )
}

export default User;