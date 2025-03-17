'use client'

// hooks
import { useEffect, useState } from "react";

// types
import { IProducts } from "@/components/types";

// components
import EmptyCart from "@/components/EmptyCart";
import ProductCart from "@/components/ProductCart";
import NotFound from "../not-found";

// context
import { useAuth } from "@/context/AuthContext";


export const Cart : React.FC = (): React.ReactElement => {

    const { userData } = useAuth()
    const [ cart, setCart ] = useState<IProducts[]>([]);
    const [ total, setTotal ] = useState<number>(0);

    useEffect(() => {
            const storedCart: IProducts[] = JSON.parse(localStorage.getItem("cart") || "[]")
            if(storedCart) {
                let totalCart = 0;
                storedCart?.map((product) => {
                    totalCart = totalCart + product.price
                })
                setTotal(totalCart)
                setCart(storedCart)
                
        }
    }, [])

    return (
        <div className="md:w-3/5 md:mx-auto sm:mx-10 mx-4 flex flex-grow justify-center items-center">
            {userData?.token ?
                (cart.length === 0 && <EmptyCart/>) || ( cart.length != 0 && <ProductCart cart={cart} total={total} setTotal={setTotal} setCart={setCart}/>)
            : <NotFound/>}
        </div>
    )

}

export default Cart;