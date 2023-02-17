import React from 'react';
import {useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom';
import GithubContext from '../../context/GithubContext';
import UserRepos from './UserRepos';


type Username = {
    username: string
}

const User = ({username} : Username) => {
    
    const {user, repos, getUserData, getUserRepo} = useContext(GithubContext)
  
    useEffect(() => {
         getUserData(username)
         getUserRepo(username)
    }, [username])
    
   const {
          avatar_url,
          bio,
          login,
          html_url,
          } = user
   
    return (
      <div className="card user">
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