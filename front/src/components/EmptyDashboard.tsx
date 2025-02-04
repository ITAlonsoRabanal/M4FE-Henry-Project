import { MonitorCogIcon } from "lucide-react";

export const EmptyDashboard = () => {

    return (
        <div 
        className="mt-20  p-3 m-auto">
            <h2 className="flex justify-center text-xl mb-2 md:text-3xl lg:text-5xl font-medium font-serif ">Bienvenido al dashboard</h2>
            <div className="flex items-center">
                <MonitorCogIcon size={200} className="mx-auto my-5"/>
                <p className="max-w-xs sm:text-lg text-xs pl-5 font-serif">Mediante la barra lateral, puedes visualizar la información de tu perfil, tu historial de compra o cerrar la sesión. </p>
            </div>
        </div>
    )
}

export default EmptyDashboard;