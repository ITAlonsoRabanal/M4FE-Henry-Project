export interface IRegisterProps {
    email: string,
    password: string,
    name: string,
    address: string,
    phone: string
}

export interface ILoginProps {
    email: string
    password: string,
}

export interface IOrder {
    products: number[],
    userId: number
}