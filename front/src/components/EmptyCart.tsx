import { ShoppingCart } from "lucide-react";
import Link from "next/link";

import React from "react";


export const EmptyCart : React.FC = (): React.ReactElement => {

    return (
        <div className="flex flex-col items-center gap-20">
            <h2 className="md:text-5xl text-2xl font-medium font-serif">Aún no tienes productos en el carrito</h2>
            <div className="flex items-center gap-4 mr-2">
                <ShoppingCart className="w-12 h-12 pb-2"/>
                <Link href={`/home`} className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> Regresar a Home</Link>
            </div>

        </div>
    )

}

export default EmptyCart;