export interface LoginFormValues {
    email: string;
    password: string;
}

export interface IProducts {
    
    id: number,
    name: string,
    description: string,       
    price: number,
    stock: number,
    image: string,
    categoryId: number;
}