import { useContext, useState, createContext, ReactNode } from 'react'
import { useAuth0, User  } from '@auth0/auth0-react'

type LoginProviderProps = {
    children: ReactNode
}

type LoginContextType = {
    login: () => void;
    logout: () => void;
    user: User | undefined;
    isAuthenticated: Boolean;
    isLoading: Boolean;
}

const LoginContext = createContext({} as LoginContextType)

export const useLoginContext = () => useContext(LoginContext)

export const LoginProvider = ({children}: LoginProviderProps) => {

    const {user, loginWithRedirect, logout, isAuthenticated, isLoading} = useAuth0()

    function login() {
        loginWithRedirect()
    }


    return (
        <LoginContext.Provider value={{
            login, logout, user, isAuthenticated, isLoading
        }}>
            {children}
        </LoginContext.Provider>
    )
}