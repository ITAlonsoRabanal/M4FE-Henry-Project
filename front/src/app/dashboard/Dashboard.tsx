'use client'

import LogoutButton from "@/components/LogoutButton";
import { OrderButton } from "@/components/OrderButton";
import OrderContent from "@/components/OrderContent";
import ProfileButton from "@/components/ProfileButton";
import ProfileContent from "@/components/ProfileContent";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import NotFound from "../not-found";
import EmptyDashboard from "@/components/EmptyDashboard";

export const Dashboard : React.FC = (): React.ReactElement => {
    
    const { userData } = useAuth()
    const [ content, setContent ] = useState("");

    return (
        <div className="flex flex-row flex-grow ">
            {userData?.token ?

            (<div className="flex flex-row flex-grow">
            <div className="bg-p-white shadow-2xl p-2 flex flex-col sm:gap-2 gap-5">
                <ProfileButton setContent={setContent}/>
                <OrderButton setContent={setContent}/>
                <LogoutButton/>
                
            </div>
                {content === "profile" && <ProfileContent/>}
                {content === "orders" && <OrderContent/>}
                {content === "" && <EmptyDashboard/>}  
            </div>) : <NotFound/>}
        </div>
    )

}

export default Dashboard;