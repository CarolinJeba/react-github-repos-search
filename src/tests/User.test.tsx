import React from 'react';
import { render } from '@testing-library/react';
import GithubContext from '../context/GithubContext';
import User from '../components/users/User';


describe('renders User component' ,  () => {
    
    const githubUserMock = {
                       users: [], 
                       user: [{name: 'Carol'}], 
                       repos: [],
                       loading: true, 
                       fetchUsers: jest.fn(), 
                       searchUsers: jest.fn(), 
                       getUserData: jest.fn(),
                       getUserRepo: jest.fn()
        
    }
    
   const TestComponent = (githubUserMock: any) => {
       return render(
        <GithubContext.Provider value={githubUserMock}>
          <User username= ""/>
        </GithubContext.Provider>
      );
   }
    
    it('should display the login username', () => {
        
    const {container} = TestComponent(githubUserMock)
    expect(container.getElementsByClassName('card-title').length).toBe(1);
    })
    
     it('should display the avatar url', () => {
    const {container} = TestComponent(githubUserMock)
    expect(container.getElementsByClassName('img-avatar').length).toBe(1);
    })
    
     it('should display the user bio', () => {
    const {container} = TestComponent(githubUserMock)
    expect(container.getElementsByClassName('card-text').length).toBe(1);
    })
})