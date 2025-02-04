export interface User {
    name: string;
    email: string;
    username: string;
    password: string;
}

export interface UserResponse {
    users: User[];
    total: number;
    page: number;
    pageSize: number;
}