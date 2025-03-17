"use client";

import { useEffect, useState } from "react";
import { fetchProducts } from "@/helpers/api/products.helper";
import Card from "./Card";
import Link from "next/link";

export const CardList = (): React.ReactElement => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then(setProducts).catch(console.error);
    }, []);

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {products.map((product: any) => (
                <Link key={product.id} href={`/detail/${product.id}`} className="flex justify-evenly">
                    <Card {...product} />
                </Link>
            ))}
        </div>
    );
};

export default CardList;
