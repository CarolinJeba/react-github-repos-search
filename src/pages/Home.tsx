import React, { useState } from 'react';
import { UserResults } from '../components/users/UserResults';
import { UserSearch } from '../components/users/UserSearch';
import User from '../components/users/User';

export const Home = () => {
    const [isShow, setIsShow] = useState(false);
    const [username, setUsername] = useState('');
    
     const handleBtnClick = (value: boolean) => {
      setIsShow(value);
    };
    
    const handleClick = (username: string) => {
     
      setIsShow(false)
      setUsername(username);
    };
    
    return (
        <>
        <h3 className="title">Github Profile Finder </h3>
        <p>Type username in the above search bar to display the results</p>
        <UserSearch handleBtnClick = {handleBtnClick}/>
        <UserResults isShow={isShow} username={username} handleClick={handleClick}/>
        </>
        )
}