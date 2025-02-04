import React from "react";

import image from "../../assets/3d-rendering-of-blue-digital-wireframe-waves-in-abstract-technological_11912931_wh1200.jpg"
import Link from "next/link";


export const Landing: React.FC = (): React.ReactElement  => {
    return (
        <div className="flex flex-row grow bg-cover md:pl-20 md:pt-20 p-10" style={{ backgroundImage: `url(${image.src})` }}>

          <div className="flex flex-col gap-5">

            <h2 className="text-white font-serif md:text-5xl text-3xl md:w-3/5 ">Innovación, calidad y rendimiento al mejor precio  </h2>
            <p className="text-white font-serif md:text-xl text-base md:w-3/5">Explora nuestra selección de gadgets, accesorios y dispositivos de última generación. 
            Una experiencia única</p>

            <div className="mt-10 flex lg:flex-row flex-col align-middle">
              <Link href={`/home`}>
                <button type="button" className="text-white bg-violet-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 lg:w-1/5 h-16 min-w-fit">Explora nuestros productos</button>
              </Link>
              <Link href={`register`}>
                <button type="button" className="text-blue-500 bg-white hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 lg:w-1/5 h-16 min-w-fit">Crea tu cuenta</button>
              </Link>
            </div>

          </div>

        </div>
    );
}

export default Landing;