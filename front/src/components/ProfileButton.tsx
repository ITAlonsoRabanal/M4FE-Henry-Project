import { User } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export const ProfileButton = ({ setContent }: {setContent: Dispatch<SetStateAction<string>>}) => {

    const handleProfileButton = () => {
        setContent("profile");       
    }

    return (
        <div className="hover:bg-gray-200 rounded duration-150">
            <button onClick={handleProfileButton} className="flex w-full items-center gap-2 p-2 ">
                <User className="h-5 w-5"/>
                <span className="text-lg sm:block hidden">Perfil</span>
            </button>
        </div>
    )
}

export default ProfileButton;