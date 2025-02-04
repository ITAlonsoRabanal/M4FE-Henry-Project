import { ILoginProps, IRegisterProps } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function register(userData: IRegisterProps) {
    try {
        const response = await fetch(`${API_URL}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(response.ok) {
            alert("Usuario creado exitosamente")
            return response.json();
        } else {
            throw new Error(`El usuario ya existe`)
        }
        
    } catch (error: any) {
        alert(`Registro de usuario fallido
${error}`)
        throw new Error(error)
    }
}

export async function login(userData: ILoginProps) {
    try {
        const response = await fetch(`${API_URL}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
            
        })
        console.log(response);
        
        if(response.ok) {
            alert("Usuario iniciado exitosamente")
            return response.json();
        } else {
            throw new Error(`El usuario no existe`)
        }
        
    } catch (error: any) {
        alert(`Inicio de sesion fallido
${error}`)
        throw new Error(error)
    }
}