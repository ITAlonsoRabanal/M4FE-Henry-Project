// vendors
import React from "react";

// CSS
import styles from "./styles/components.module.css";

// next
import Link from "next/link";

// components
import { UserWidget } from "./UserWidget";

export const NavBar: React.FC = (): React.ReactElement => {


    return (
        <div className={`md:h-20 md:grid md:grid-cols-3 flex flex-col h-28 gap-3 p-1 w-full  ${styles.navBar}`}>
            <div className="flex flex-row justify-center items-center">
                <span className="text-p-white text-xl">GenX Store</span>
            </div>
            <div className="gap-10 mx-10 flex flex-row md:justify-center justify-between items-center" >
                <Link href={`/home`} className={styles.navButtons}>Home</Link>
                <Link href={`/about`} className={styles.navButtons}>About</Link>
                
            </div>
                <UserWidget/>
                
                
            

        </div>
    )

}

export default NavBar;