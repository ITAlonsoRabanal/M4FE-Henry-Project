import { IProducts } from "@/components/types";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    } catch (error: any) {
        throw new Error(error)
    }
    
}

export const fetchProductById = async (id: string) => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        const productFiltered = response.data.find((product: IProducts) => product.id.toString() === id)
            return productFiltered;
    } catch (error: any) {
        throw new Error(error)
    }
    
}