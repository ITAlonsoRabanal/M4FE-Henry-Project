// vendors 
import React from "react"

// utils
import { productsArray } from "../../utils/products"

// components
import { CardList } from "@/components/CardList"


const Home: React.FC = (): React.ReactElement => {
    return (
        <div>
            <div className="flex flex-col max-w-6xl p-2 mx-auto mt-24">
                <h1 className="text-5xl font-medium font-serif">Explora.</h1>
                <div className="text-3xl font-serif text-gray-600">Hemos elegido estos productos para ti</div>
                <div>
                    <CardList/>
                </div>
            </div>
        </div>
    )
}

export default Home;