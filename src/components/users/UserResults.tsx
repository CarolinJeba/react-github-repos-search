import React, { useState } from 'react';
import {useEffect, useContext} from 'react'
import GithubContext from '../../context/GithubContext';
import { Link } from 'react-router-dom';
import User from './User';


export interface UserResultsModel {
   isShow: boolean;
   username: string;
   handleClick: (username: string) => void
}

export const UserResults = ({isShow, username, handleClick} : UserResultsModel)=> {
    
    const {users, loading} = useContext(GithubContext);
 
    
    if(isShow) {
         return (
        <div className="container">  
         {users.map((user: any) => {
         
            return (
            <div className="card results" key={user.login}>
             <img src={user.avatar_url} alt="" />
                  <div className="cell">
                    <span> 
                      {user.login} </span> 
                 </div>
                 <div className="cell">
                 
                 <button onClick={() => handleClick(user.login)}>View profile </button>
                 </div>
                 
            </div>
          )
        })
        }
        </div>
        )
    }
    else if (username !== '') {
        return <User data-testid="single-user" username= {username}/> 
    }
    else return null
}