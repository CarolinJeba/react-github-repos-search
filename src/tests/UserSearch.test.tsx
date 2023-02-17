import React from 'react';
import { render , fireEvent} from '@testing-library/react'; 
import GithubContext, { GithubContextProps } from '../context/GithubContext';
import { UserSearch } from '../components/users/UserSearch';



describe('renders UserSearch component...', () => {
    
    
    const githubUserMock = {
                       users:  [{name: 'Carol'}, {name: 'John'}],
                       user: {name: 'Carol'}, 
                       repos: [{name: 'John'}],
                       loading: false, 
                       searchUsers: jest.fn(), 
                       getUserData: jest.fn(),
                       getUserRepo: jest.fn(), 
        
    }
    
    
    const TestComponent = (githubUserMock: GithubContextProps) => {
        return render(
            <GithubContext.Provider value={githubUserMock}> 
             <UserSearch handleBtnClick = {jest.fn()} />
            </GithubContext.Provider>
            )
    }
    
    
    it('should display the search bar', () => {
      
    const {container} = TestComponent(githubUserMock)  
    expect(container.getElementsByClassName('searchbar-nav').length).toBe(1);
    })
    
    it('should contain the input textbox in form', () => {
      
    const { getByRole } = TestComponent(githubUserMock);
    const element = getByRole('textbox')
    expect(element).toBeInTheDocument();
    })
    
    it('should contain the button in form', () => {
      
    const { getByText} = TestComponent(githubUserMock);
    const button = getByText('Search');
    expect(button).toBeTruthy()
    })
    
    it('should be able to enter value in the inputbox', () => {
      
    const { getByRole} = TestComponent(githubUserMock);
    const inputElement = getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'John' }})
    expect(inputElement).toHaveValue('John')
    })
    
    it('alerts on submit click', async () => {
     const alertMock = jest.spyOn(window,'alert').mockImplementation(); 
     const { getByText } = TestComponent(githubUserMock);
     fireEvent.click(getByText('Search'))
     expect(alertMock).toHaveBeenCalledTimes(1)
    })
    
    it('should display loading div if loading', () => {
      
    const { container } = TestComponent({...githubUserMock, loading: true});
    expect(container.getElementsByClassName('searchbar-nav').length).toBe(0);
    expect(container.getElementsByClassName('loading').length).toBe(1)
    })
    
})