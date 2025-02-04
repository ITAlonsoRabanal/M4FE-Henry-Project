//helpers
import { fetchProducts } from "@/helpers/api/products.helper";

// components
import Card from "./Card";
import Link from "next/link";

export const CardList: React.FC = async (): Promise<React.ReactElement> => {

    const fetchData = await fetchProducts();

    return (
                <div className="grid lg:grid-cols-3 md:grid md:grid-cols-2 grid-cols-1">
                        {fetchData?.map((product: any) => {
                            return (
                                <Link key={product.id} href={`/detail/${product.id}`} className="flex justify-evenly">
                                    <Card key={product.id} {...product}/>
                                </Link>
                                )
                        })}
                        
                </div>
                
    )
}

export default CardList;