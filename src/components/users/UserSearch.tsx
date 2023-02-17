import React, { useContext } from 'react';
import {useState} from 'react'
import { UserResults } from './UserResults';
import GithubContext from '../../context/GithubContext';

interface UserSearchModel {
    handleBtnClick: (value: boolean) => void
}

export const UserSearch = ({handleBtnClick} : UserSearchModel) => {
    
    const [text, setText] = useState('');
    const {users, loading, searchUsers} = useContext(GithubContext)
    
    const handleChange = (e: any) => setText(e.target.value)
    
    const handleSubmit =  (e: any) => {
        e.preventDefault();
        
        if(text === ''){
            alert('Please enter value')
        }
        else {
            searchUsers(text)
            setText('')
        }
    }
    
        
    if (!loading) {
            return (
                  <div className = "box searchbar-nav">
                     <form data-testid= "search-form" onSubmit={handleSubmit}>
                       <div className = "search_box">
                       <input type = 'text' placeholder = "Enter username"  value={text} onChange={handleChange}/>
                       <button type = 'submit' onClick = {() => handleBtnClick(true)} className= "btn  btn-lg btn-secondary search-btn"> Search </button>
                    </div>
                    </form>
                  </div>
                  )
        }
        else {
            return <div className="loading">Loading..</div>
        }
}