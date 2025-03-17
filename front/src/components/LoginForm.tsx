"use client"
// formik
import { ErrorMessage, Field, Form, Formik } from "formik";

// helpers
import { validateLogin } from "@/helpers/validations/validateLogin";
import { login } from "@/helpers/api/auth.helper";

// types
import { LoginFormValues } from "./types";

// styles modules
import styles from "./styles/components.module.css";

// context
import { useAuth } from "@/context/AuthContext";

// next
import { useRouter } from "next/navigation";
import Link from "next/link";

// cookies
import Cookies from "js-cookie";


export const LoginForm : React.FC = (): React.ReactElement => {

    const { setUserData } = useAuth();
    const router = useRouter()

    return (
        <div>
            <Formik<LoginFormValues>
                initialValues={{ email: '', password: '' }}
                validate={validateLogin}
                onSubmit={ async (values) => {
                    const response = await login(values); 
                    setUserData({token: response.token, user: response.user});
                    Cookies.set("userData", JSON.stringify({token: response.token, user: response.user}))
                    router.push(`/home`)
                    }}>
                
                <Form>
                    <div className="mx-auto mb-5 overflow-hidden border max-w-lg rounded-xl p-3 bg-slate-50 shadow-2xl 
                        flex flex-col ">

                        <h2 className="m-auto text-5xl font-medium font-serif">Accede a tu cuenta</h2>
                        <p className="m-auto  text-xl font-serif text-gray-600 mb-2">Estabamos esperando que vuelvas</p>

                        <div className="flex flex-col border-t pt-5 gap-2">

                            <Field type="text" name="email" placeholder="Email" className={styles.formFields}></Field>
                            <ErrorMessage name="email">
                            { msg => <div style={{ color: 'red' }}>{msg}</div> }
                            </ErrorMessage>

                            <Field type="password" name="password" placeholder="Contraseña" className={styles.formFields}></Field>
                            <ErrorMessage name="password">
                            { msg => <div style={{ color: 'red' }}>{msg}</div> }
                            </ErrorMessage>

                        </div>

                        <button className="mt-4 mx-auto text-blue-500" type="submit">Iniciar sesion</button>
                        <div className="mt-4">
                            <span>No tienes una cuenta? </span>
                            <Link href={`/register`} className="text-blue-500">Registrate</Link>
                        </div>

                    </div>
                </Form>
            </Formik>
        </div>
    )

}

export default LoginForm;