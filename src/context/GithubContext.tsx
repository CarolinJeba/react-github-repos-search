import React , {ReactNode} from 'react';
import  { createContext , useReducer} from 'react'
import githubReducer from './GithubReducer';

interface GithubContextProps  {
    users: any, 
    user: any,
    repos: any,
    loading: boolean,
    searchUsers: (text: string) => Promise<any>
    getUserData: (login: string) => Promise<any>
    getUserRepo: (login: string) => Promise<any>
}


const GithubContext = createContext<GithubContextProps>({} as GithubContextProps)


type Props = {
    children?: ReactNode;
}

export const GithubProvider = ({children} : Props) => {
    
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }
    
    
    const [state, dispatch] = useReducer(githubReducer, initialState)

    
    // Search Users
    
     const searchUsers = async (text: string) => {
        
         dispatch(
            {
                type: 'SET_LOADING',
            }
            )
            
        const params = new URLSearchParams({
            q: text
        })
        
        
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`, {
            headers: {
                 Authorization: `token ${process.env.REACT_APP_GITHUB_AUTH_TOKEN}`
                }
        })
        
        const {items} = await response.json()
        
        dispatch(
            {
                type: 'GET_USERS',
                payload: items,
                
            }
            )
    }
    
    // Get Single User Details
    
     const getUserData = async (login: string) => {
        
         dispatch(
            {
                type: 'SET_LOADING',
            }
            )
        
        
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}`, {
            headers: {
                 Authorization: `token ${process.env.REACT_APP_GITHUB_AUTH_TOKEN}`
                }
        })
        
        if(response.status === 404) {
            alert('No data found')
        }
        else {
            const result = await response.json()
        
        dispatch(
            {
                type: 'GET_USER',
                payload: result,
                
            }
            )
        }
        
    }
    
    
    // Get Single User repos
    
     const getUserRepo = async (login: string) => {
         
        
        
         dispatch(
            {
                type: 'SET_LOADING',
            }
            )
        
        
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos`, {
            headers: {
                 Authorization: `token ${process.env.REACT_APP_GITHUB_AUTH_TOKEN}`
                }
        })
        
        if(response.status === 404) {
            alert('No data found')
        }
        else {
            const result = await response.json()
        
        dispatch(
            {
                type: 'GET_USER_REPO',
                payload: result,
                
            }
            )
        }
        
    }
    
    
    return (
         <GithubContext.Provider 
               value={{users: state.users, 
                       user: state.user, 
                       repos: state.repos,
                       loading: state.loading, 
                       searchUsers, 
                       getUserData,
                       getUserRepo
               }}>
          {children}
         </GithubContext.Provider>
        )
}

export default GithubContext

