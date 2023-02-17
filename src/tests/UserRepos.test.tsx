import React from 'react';
import { render } from '@testing-library/react';
import UserRepos from '../components/users/UserRepos';
import { ReposModel } from '../components/tsmodels/repos';

describe('renders App component', () => {
    
  const repos : any = {
      repos: [{
          name: 'John',
          owner: {
              login: "John"
          }
      }]
        
  }
    
  const {container} =  render(<UserRepos repos= {repos} />)
  
  it('should display the Repos Table', () => {
      expect(container.querySelector('#ReposTable')).toBeInTheDocument()
  })
  
  
  
});
