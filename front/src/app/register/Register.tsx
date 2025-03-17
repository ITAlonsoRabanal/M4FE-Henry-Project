import RegisterForm from "@/components/RegisterForm";

import image from "../../../assets/Screenshot_2025-01-24_172431.png"
import Image from "next/image";

export const Register : React.FC = (): React.ReactElement => {

    return (
        <div className="gap-1 flex flex-col flex-grow ">
            <Image alt="Genx Store" src={image.src} className=" mx-auto"/>
            <RegisterForm/>
        </div>
    )

}

export default Register;