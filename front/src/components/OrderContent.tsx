import { getUserOrders } from "@/helpers/api/order.helper";
import React, { useEffect, useState } from "react";
import { IProducts } from "./types";

export const OrderContent: React.FC = (): React.ReactElement => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getUserOrders()
            .then((response) => response.json())
            .then((data) => {
                setOrders(data);
            })
            .catch((error) => console.error("Error al obtener órdenes:", error));
    }, []);

    return (
        
        <div className="flex flex-col flex-grow sm:p-10 mt-10 p-2 gap-3">
            <div className="grid grid-cols-3 mx-2 gap-2">
                    <span className="md:text-xl font-medium font-serif text-sm">Numero de compra</span>
                    <span className="flex justify-center md:text-xl font-medium font-serif text-sm">Productos</span>
                    <span className="flex justify-end md:text-xl font-medium font-serif text-sm">Fecha de compra</span>
            </div>
            <div className="border-t border-black"></div>

            <div className="flex flex-col mx-2 ">
                {orders.map((order) => {
                    const { products, id, date }: { products: IProducts[], id: number, date: Date} = order;
                    const formattedDate = new Date(date).toLocaleString("es-ES");
                    return (
                        <div key={`order ${id}`} className="grid grid-cols-3 my-5">
                            <p className="text-xs">{id}</p>
                            <div className="flex flex-col justify-center pr-2">
                                {products.map((product: IProducts) => {
                                    return (
                                        <ul className="flex text-xs justify-center" key={`order ${id} product ${product.id}`}>
                                            {product.name}
                                        </ul>
                                    )
                                })}
                            </div>
                            <p className="flex justify-end text-xs">{formattedDate}</p>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    );
};

export default OrderContent;
