import RegisterForm from "@/components/RegisterForm";

import styles from "./register.module.css"

import image from "../../../assets/Screenshot_2025-01-24_172431.png"

export const Register : React.FC = (): React.ReactElement => {

    return (
        <div className="gap-1 flex flex-col flex-grow ">
            <img src={image.src} className=" mx-auto"/>
            <RegisterForm/>
        </div>
    )

}

export default Register;