// vendors
import React from "react"

// assets
import image from "../../assets/1662569.jpg"
import Link from "next/link";


const NotFound: React.FC = (): React.ReactElement => {

    return (
        <div className="flex flex-col flex-grow items-center">
            <div 
            className="my-10 flex flex-col max-w-sm overflow-hidden border rounded-xl p-3 bg-slate-50 shadow-xl hover:scale-105 transition">
                <h2 className="text-3xl mb-2 font-medium">Ups...</h2>
                <h3>Como llegaste hasta aqui?</h3>
                <img className="mb-3 p-3" src={image.src}/>
                <p>No hemos podido encontrar lo que buscabas</p>
                
            </div>
                <Link href={`/home`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Regresar a Home</Link>
        </div>
    )
}

export default NotFound;