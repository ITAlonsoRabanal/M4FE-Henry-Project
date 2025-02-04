"use client"

import { validateRegister } from "../helpers/validations/validateRegister";
import { Formik, Field, Form, ErrorMessage} from 'formik';
import styles from "./styles/components.module.css"
import Link from "next/link";
import { register } from "@/helpers/api/auth.helper";
import { useRouter } from "next/navigation";
import { IRegisterProps } from "@/helpers/api/types";


const RegisterForm: React.FC =  (): React.ReactElement => {           

        const router = useRouter();

    return (

        <Formik
            initialValues={{ name: '', email: '', address: '', password: '', confirm: '', phone: '' }}
            validate={validateRegister}
            onSubmit={async (values) => {
                try {
                    const { name, email, address, password, phone} = values
                    const data: IRegisterProps = {name, email, address, password, phone}
                    await register(data);
                    router.push("/login")

                } catch (error: any) {
                    throw new Error(error)
                }
                
        }}
        >

            <Form>
                <div className="mx-auto mb-5 overflow-hidden border max-w-lg rounded-xl p-3 bg-slate-50 shadow-2xl
                flex flex-col ">

                    <h2 className="m-auto sm:text-5xl text-3xl font-medium font-serif">Crea tu cuenta</h2>
                    <p className="m-auto  sm:text-xl text-lg font-serif text-gray-600 mb-2">Y accede a lo último de nuestros productos</p>

                    <div className="flex flex-col border-t pt-5 gap-2">

                    <Field type="text" name="name" placeholder="Ingresa tu nombre" className={styles.formFields}></Field>
                    <ErrorMessage name="name">
                    { msg => <div style={{ color: 'red' }}>{msg}</div> }
                    </ErrorMessage>

                    <Field type="text" name="phone" placeholder="Ingresa tu numero de teléfono" className={styles.formFields}></Field>
                    <ErrorMessage name="phone">
                    { msg => <div style={{ color: 'red' }}>{msg}</div> }
                    </ErrorMessage>

                    <Field type="text" name="address" placeholder="Ingresa tu dirección" className={styles.formFields}></Field>
                    <ErrorMessage name="address">
                    { msg => <div style={{ color: 'red' }}>{msg}</div> }
                    </ErrorMessage>

                    <Field type="text" name="email" placeholder="Ingresa tu email" className={styles.formFields}></Field>
                    <ErrorMessage name="email">
                    { msg => <div style={{ color: 'red' }}>{msg}</div> }
                    </ErrorMessage>

                    <Field type="password" name="password" placeholder="Crea una contraseña segura" className={styles.formFields}></Field>
                    <ErrorMessage name="password">
                    { msg => <div style={{ color: 'red' }}>{msg}</div> }
                    </ErrorMessage>

                    <Field type="password" name="confirm" placeholder="Confirma tu contraseña" className={styles.formFields}></Field>
                    <ErrorMessage name="confirm">
                    { msg => <div style={{ color: 'red' }}>{msg}</div> }
                    </ErrorMessage>

                    </div>

                    <button className="mt-4 mx-auto text-blue-500" type="submit">Registrarse</button>
                    <div className="mt-4">
                        <span>Ya tienes una cuenta? </span>
                        <Link href={`/login`} className="text-blue-500">Inicia sesion</Link>
                    </div>

                </div>
            </Form>

            

        </Formik>
    )
}

export default RegisterForm;