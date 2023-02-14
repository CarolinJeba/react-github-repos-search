import React from 'react';

interface GithubState {
    users: {}[]
    user: any,
    repos: any,
    loading: boolean
}


interface GithubAction {
    type: any
    payload?: any,
}

const githubReducer = (state: GithubState, action: GithubAction) => {
    
    switch(action.type) {
        
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false
            }
            
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
            
        case 'GET_USER':
            return {
                ...state,
                user: action.payload,
                loading: false
            }
            
        
        case 'GET_USER_REPO':
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
        
        default:
        return state
        
    }
    
}

export default githubReducer