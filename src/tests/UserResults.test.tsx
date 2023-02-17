import React from 'react';
import { render } from '@testing-library/react';
import GithubContext from '../context/GithubContext';
import { UserResults, UserResultsModel } from '../components/users/UserResults';


describe('renders UserResults component..', () => {

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
             <UserResults isShow = {true} username = {''} handleClick = {jest.fn()}/>
            </GithubContext.Provider>
            )
    }
    
    
    
    it('should display the user search results', () => {
        const {container} = TestComponent({...githubUserMock, 
                                        users: [{name: 'Carol'}, {name: 'John'}, {name: 'Anna'}]})  
        expect(container.getElementsByClassName('results').length).toBe(3)
        
    })
    
    it('should display the user image', () => {
        const {container} = TestComponent({...githubUserMock, 
                                        user: [{name: 'Carol', avatar_url: ''}]})  
        expect(container.getElementsByTagName('img').length).toBe(1)
        
    })
    
    it('should display the View Profile button', () => {
        const {container} = TestComponent(githubUserMock)  
        expect(container.getElementsByTagName('button')).toBeTruthy()
        
    })
   
    
})



