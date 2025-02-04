import { IOrder } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function saveOrder(order: IOrder) {
    const token = JSON.parse(localStorage.getItem("userSession") || "[]").token;
    try {
        const response = await fetch(`${API_URL}/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": token
            },
                body: JSON.stringify(order)
            })
            return response
    } catch (error) {
        throw new Error(`Hubo un problema con la compra
${error}`)
    }
    
}

export async function getUserOrders() {

    const token = JSON.parse(localStorage.getItem("userSession") || "[]").token;

    try {
        const response = await fetch(`${API_URL}/users/orders`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": token
            },
        })
        return response;
    } catch (error) {
        throw new Error(`Hubo un problema al cargar las ordenes
            ${error}`)
    }
}