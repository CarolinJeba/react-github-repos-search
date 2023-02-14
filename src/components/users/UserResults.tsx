import React from 'react';
import {useEffect, useContext} from 'react'
import GithubContext from '../../context/GithubContext';
import { Link } from 'react-router-dom';

export const UserResults = () => {
    
    const {users, loading} = useContext(GithubContext);
    
    // useEffect(() => {
    // //   fetchUsers()
    // }, [])
    
    console.log(users, 'users')
    console.log(loading, 'loading')
    
    if(!loading) {
         return (
        <div className="container">  
         {users.map((user: any) => {
         
            return (
            <div className="card">
             <img src={user.avatar_url} alt="" />
                  <div className="cell">
                    <span> 
                      {user.login} </span> 
                 </div>
                 <div className="cell">
                 <Link to={`/users/${user.login}`}>View profile </Link>
                 </div>
                 
            </div>
          )
        })
        }
        </div>
        )
    }
    else {
        return <div>Loading.....</div>
    }
   
}