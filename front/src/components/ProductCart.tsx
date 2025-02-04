'use client'

//vendors
import React, { Dispatch, SetStateAction } from "react";

// hooks
import { useEffect, useState } from "react";

// types
import { IProducts } from "./types";

// styles
import styles from "./styles/components.module.css"

// icons
import { XCircle } from "lucide-react";
import { saveOrder } from "@/helpers/api/order.helper";

export const ProductCart: React.FC<{ cart: IProducts[]; setTotal: Dispatch<SetStateAction<number>>, setCart: Dispatch<SetStateAction<IProducts[]>>, total: number }> = ({ cart, setTotal, total, setCart }): React.ReactElement => {


        const handleDeleteProduct = (id: number) => {
            let auxCart: IProducts[] = JSON.parse(localStorage.getItem("cart") || "[]");
            auxCart = auxCart.filter(product => product.id !== id);
            localStorage.setItem("cart", JSON.stringify(auxCart));
            let totalCart = 0;
            auxCart?.map((product) => {
                totalCart = totalCart + product.price
            })
            setTotal(totalCart)
            setCart(auxCart);
            
        
        }

        const handleConfirm = async () => {
            
                const products: number[] = [];
                cart.map((product) => {
                    products.push(product.id);
                })
                const userId= JSON.parse(localStorage.getItem("userSession") || "[]").user.id;
                const body = {products, userId}
                const response = await saveOrder(body);
                if(response.ok) {
                    alert("La compra se realizó con exito");
                    setCart([]);
                    localStorage.setItem("cart", "[]");
                }
        }

        return (
            <div className="flex flex-col flex-grow w-3/4 gap-y-10 mt-10">
                <div className="flex justify-between mx-2 gap-2">
                    <span className={styles.cartSpans}>Producto</span>
                    <span className={styles.cartSpans}>Precio</span>
                    <span className={styles.cartSpans}>Descartar</span>
                    

                </div>
                
                <div className="border-t border-black"></div>

                    {cart.length > 0 && cart.map((product) => {
                        return (
                            <div key={product.id} className="grid grid-cols-3 justify-between overflow-hidden border rounded-xl py-3  bg-slate-50 shadow-2xl hover:scale-105 transition">
                                <div className="flex flex-col gap-2 px-2">
                                    <p className="flex w-52 md:text-xl text-xs font-medium ">{product.name}</p>
                                    <img src={product.image} className="w-52 "/>
                                </div>
                                <p className="flex justify-center self-center md:text-3xl">${product.price}</p>
                                <div className="flex justify-end self-center ">
                                    <button onClick={() => handleDeleteProduct(product.id)}>

                                        <XCircle className=" w-6 h-6 text-red-500 cursor-pointer mr-10" />
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                    {true &&
                        <div className="flex justify-end gap-10">
                            <p className="md:text-3xl font-medium font-serif text-lg">Total: ${total}</p>
                            <button onClick={handleConfirm} type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium shadow-black shadow-sm rounded-lg text-sm md:px-5 px-2 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">Confirmar Compra</button>
                        </div>}

            </div>
        )
}

export default ProductCart;