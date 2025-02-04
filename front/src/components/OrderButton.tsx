import { Clipboard } from "lucide-react";
import { Dispatch, SetStateAction } from "react";


export const OrderButton = ({ setContent }: {setContent: Dispatch<SetStateAction<string>>}) => {

    const handleOrderButton = () => {
        setContent("orders");        
    }

    return ( 
        <div className="hover:bg-gray-200 rounded duration-150">
            <button onClick={handleOrderButton} className="flex w-full items-center gap-2 p-2">
                <Clipboard className="h-5 w-5"/>
                <span className="text-lg sm:block hidden">Orders </span>
            </button>
        </div>
    )
}

export default OrderButton;