export interface IUserSession {
    token: string,
    user: {
        address: string,
        email: string,
        id: number,
        name: string,
        phone: string,
        orders: []
    }
}

export interface IAuthContextProps {
    userData: IUserSession | null,
    setUserData: (userData: IUserSession | null) => void
}

export interface IAuthProviderProps {
    children: React.ReactNode
}