import React from 'react';
import { render } from '@testing-library/react';
import { UserResults } from '../components/users/UserResults';
import GithubContext from '../context/GithubContext';
import users from '../mocks/users.json'


describe('', () => {
    const githubUserMock = {
                       users: [{login: "john",}], 
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
          <UserResults />
        </GithubContext.Provider>
      );
   }
    it('', () => {
         const {container} =  render(<UserResults />);
    })
})