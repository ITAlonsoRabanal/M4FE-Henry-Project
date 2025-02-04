'use client'
import { useAuth } from "@/context/AuthContext";
import Link from "next/link"

import styles from "./styles/components.module.css"

export const UserWidget = () => {

    const { userData } = useAuth();

    return (
        
    
    userData?.token ? (

            <div className="flex flex-row mx-10 md:justify-center justify-between items-center gap-10">
                <Link href={`/dashboard`} className={styles.navButtons}>Dashboard</Link>
                <Link href={`/cart`} className={styles.navButtons}>Checkout</Link>
            </div>

            ) : ( <div className="flex flex-row mx-10 md:justify-center justify-between items-center gap-10">
                <Link href={`/login`} className={styles.navButtons}>Log In</Link>
                <Link href={`/register`} className={styles.navButtons}>Sign in</Link>
            </div>
        )
    
    )
}