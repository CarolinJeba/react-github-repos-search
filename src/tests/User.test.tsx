import React from 'react';
import { render } from '@testing-library/react';
import User from '../components/users/User';
import GithubContext from '../context/GithubContext';

describe('', () => {
    
     const githubUserMock = {
                       users:  [{name: 'John'}],
                       user: {name: 'Carol'}, 
                       repos: [{name: 'John'}],
                       loading: false, 
                       searchUsers: jest.fn(() => {name: 'Carol'}), 
                       getUserData: jest.fn(),
                       getUserRepo: jest.fn(), 
        
    }
    
     const TestComponent = (githubUserMock: any) => {
        return render(
            <GithubContext.Provider value={githubUserMock}> 
             <User username = {'John'}/>
            </GithubContext.Provider>
            )
    }
    
     it('should display the user image', () => {
        const {container} = TestComponent({...githubUserMock, 
                                        user: [{name: 'Carol', avatar_url: ''}]})  
        expect(container.getElementsByTagName('img').length).toBe(1)
        
    })
    
    it('', () => {
        
    })
})