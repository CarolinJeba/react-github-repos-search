import React from 'react';
import { render } from '@testing-library/react';
import User from '../pages/User';
import GithubContext from '../context/GithubContext';


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
          <User />
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