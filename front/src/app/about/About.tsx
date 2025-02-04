import { HeartPulseIcon, SquareDashedBottomCodeIcon } from "lucide-react";


export const About : React.FC = (): React.ReactElement => {

    return (
        <div className="flex flex-row grow p-2 justify-evenly">

            <div className="my-10 max-w-xs overflow-hidden border rounded-xl p-3 bg-slate-50 shadow-2xl hover:scale-105 transition max-h-fit">
                <h2 className="text-3xl mb-2 font-serif">Mi Camino</h2>
                <HeartPulseIcon size={200} className="mx-auto my-5"/>
                <p className="text-justify">Actualmente estoy estudiando Desarrollo Web para impulsar mis habilidades, contribuir a mi trayectoria 
                    profesional y desarrollar proyectos que tengan un valor para las personas</p>
            </div>

            <div className="my-10 max-w-xs overflow-hidden border rounded-xl p-3 bg-slate-50 shadow-2xl hover:scale-105 transition max-h-fit">
                <h2 className="text-3xl mb-2 font-serif">Detalles del proyecto</h2>
                <SquareDashedBottomCodeIcon size={200} className="mx-auto my-5"/>
                <p className="text-justify">Este es un proyecto front end que he desarrollado durante el curso de Henry de forma individual. Está hecho con React, Next.js, TypeScript y Tailwind</p>
            </div>

        </div>
    )

}

export default About;