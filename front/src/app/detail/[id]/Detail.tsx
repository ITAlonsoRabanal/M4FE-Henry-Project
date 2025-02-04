// components
import DetailedCard from "@/components/DetailedCard";

// types
import { IParams, IProps } from "./types";

// utils
import { productsArray } from "../../../utils/products"

// helpers
import { fetchProductById, fetchProducts } from "@/helpers/api/products.helper";
import { notFound } from "next/navigation";


export const Detail = async ({ params }: { params: Promise<IParams> }) => {
    
    const { id } = await params;    

    const fetchData = await fetchProductById(id);    

    return (
            <div className="flex justify-center flex-grow">
                {!fetchData ? notFound() : <DetailedCard {...fetchData}/> }
            </div>
    )

}

export default Detail;