import LoginForm from "@/components/LoginForm";

import image from "../../../assets/Screenshot_2025-01-24_172431.png"
import Image from "next/image";

export const Login : React.FC = (): React.ReactElement => {

    return (
        <div className="gap-1 flex flex-col flex-grow ">
        <Image src={image.src} className=" mx-auto" alt={"Genx Store"}/>
        <LoginForm/>
   </div>
    )

}

export default Login;