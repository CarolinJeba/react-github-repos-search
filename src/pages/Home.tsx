import React from 'react';
import { UserResults } from '../components/users/UserResults';
import { UserSearch } from '../components/users/UserSearch';

export const Home = () => {
    return (
        <>
        <h3 className="title">Github Profile Finder</h3>
        <UserSearch/>
        <UserResults/>
        </>
        )
}