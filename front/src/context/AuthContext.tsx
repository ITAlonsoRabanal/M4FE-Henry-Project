'use client'
import { createContext, useContext, useState, useEffect } from 'react';
import { IAuthContextProps, IAuthProviderProps, IUserSession } from './types';

export const AuthContext = createContext<IAuthContextProps>({ 
    userData: null,
    setUserData: () => {} 
})

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {

    const [userData, setUserData] = useState<IUserSession | null>(null);

    useEffect(() => {
        if(userData) {
            localStorage.setItem(`userSession`, JSON.stringify({token: userData.token, user: userData.user}))
        }
    }, [userData])

    useEffect(() => {
            const userData = JSON.parse(localStorage.getItem(`userSession`)!)
            setUserData(userData)
    }, [])

    return (
        <AuthContext.Provider value={{ userData, setUserData }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);