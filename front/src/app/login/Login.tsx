import LoginForm from "@/components/LoginForm";

import image from "../../../assets/Screenshot_2025-01-24_172431.png"

export const Login : React.FC = (): React.ReactElement => {

    return (
        <div className="gap-1 flex flex-col flex-grow ">
        <img src={image.src} className=" mx-auto"/>
        <LoginForm/>
   </div>
    )

}

export default Login;