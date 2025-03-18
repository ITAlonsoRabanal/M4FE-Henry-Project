// vendors
import React from "react"

// utils
import { IProducts } from "./types";
import Image from "next/image";


const Card: React.FC<IProducts> = (product) => {

    const {name, price, image} = product;



    return (
        <div 
        className="my-10 max-w-xs overflow-hidden border rounded-xl p-3 bg-slate-50 shadow-2xl hover:scale-105 transition">
            <h2 className="text-2xl mb-2">{name}</h2>
            <Image width={180} height={150} alt={name} className="mb-3 p-3" src={image}/>
            <p>Desde ${price}</p>
        </div>
    )

}

export default Card;