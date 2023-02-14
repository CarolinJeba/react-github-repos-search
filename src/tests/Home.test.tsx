import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '../pages/Home';
import GithubContext from '../context/GithubContext';


describe('renders Home component', () => {
    
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
          <Home />
        </GithubContext.Provider>
      );
   }
   
   const {container} = TestComponent(githubUserMock)
    it('should conatin the title', () => {
        expect(container.getElementsByClassName('title').length).toBe(1);
    })
})