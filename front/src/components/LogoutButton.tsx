'use client'

import { useAuth } from "@/context/AuthContext"
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation"
import React from "react";
import Cookies from "js-cookie";

const LogoutButton: React.FC = (): React.ReactElement => {

    const { setUserData } = useAuth();
    const router = useRouter();
    const handleLogout = () => {
        setUserData(null);
        localStorage.removeItem("userSession")
        localStorage.removeItem("cart")
        router.push("/")
        Cookies.remove("userData")
        alert(`Has cerrado la sesion`)
    }

    return (
        <div className="hover:bg-gray-200 rounded duration-150">
            <button onClick={handleLogout} className="flex w-full items-center gap-2 p-2">
                <LogOut className="h-5 w-5"/>
                <span className="text-lg sm:block hidden">Cerrar sesion</span>
            </button>
        </div>
        
    )
}


export default LogoutButton;