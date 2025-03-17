'use client'

import { UserCircle } from "lucide-react";



export const ProfileContent = () => {

    const user = JSON.parse(localStorage.getItem("userSession") || "")?.user;

    return (
        <div className="flex flex-col flex-grow p-10 gap-3">
            <h2 className="">Bienvenido al perfil</h2>
            <div className="border-t border-black w-1/2 "></div>
            <div className="flex gap-3">
                <UserCircle/>
                <p>{user.name}</p>
            </div>
            <p>{user.email}</p>
            <p>Telefono: {user.phone}</p>
        </div>
    )
}

export default ProfileContent;