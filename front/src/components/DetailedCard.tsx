"use client"

// vendors
import React from "react"

// utils
import { catchLinesArray } from "@/utils/products";
import { IProducts } from "./types";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";


const DetailedCard: React.FC<IProducts> = (product): React.ReactElement => {

    const {id, name, description, price, stock, image, categoryId} = product;

    const { userData } = useAuth();
    const router = useRouter();

    const handleAddToCart = () => {
        if(!userData?.token) {
            alert(`Debes iniciar sesión para añadir productos`);
            router.push(`/login`)
        } else {

            const cart: IProducts[] = JSON.parse(localStorage.getItem("cart") || "[]")

            const productExist = cart.some((item: IProducts) => {
                if(item.id === id) return true;
                return false
            })
            if(productExist) {
                alert(`No puedes añadir un producto que ya está en tu carrito`)
            } else{ 
                cart.push({id, name, description, price, stock, image, categoryId})
                localStorage.setItem("cart", JSON.stringify(cart))
                alert(`Producto añadido correctamente`);
                router.push(`/home`)
            }

        }
    }



    return (
        <div 
        className="my-10 flex flex-col max-w-sm overflow-hidden border rounded-xl p-3 bg-slate-50 shadow-xl hover:scale-105 transition">
            <h2 className="text-3xl mb-2 font-medium">{name}</h2>
            <h3>{catchLinesArray[id-1]}</h3>
            <img className="mb-3 p-3" src={image}/>
            <p className="mb-3">{description}</p>
            <p>Desde ${price}</p>
            <p>Stock: {stock}</p>
            <p>Categoria: {categoryId}</p>
            <button type="button"
            onClick={handleAddToCart} 
            className="mt-4 ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg 
            text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Añadir al carrito</button>
        </div>
    )

}

export default DetailedCard;