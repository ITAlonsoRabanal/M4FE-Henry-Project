import { LoginFormValues } from "@/components/types";

export const validateLogin = (input: LoginFormValues) => {
    const errors: Partial<LoginFormValues> = {}
    ;
    const { email, password} = input;

    if (!email) {
        errors.email = 'El nombre de usuario es obligatorio';
    } else if (email.length < 8) {
        errors.email = 'El nombre de usuario debe tener al menos 8 caracteres';
    } else if (email.length > 24) {
        errors.email = 'El nombre de usuario no debe superar los 24 caracteres';
    }
    // Validación de contraseña
    if (!password) {
        errors.password = 'La contraseña es obligatoria';
    } else if (password.length < 8) {
        errors.password = 'La contraseña debe tener al menos 8 caracteres';
    } else if (!/[A-Z]/.test(password)) {
        errors.password = 'La contraseña debe incluir al menos una letra mayúscula';
    } else if (!/[a-z]/.test(password)) {
        errors.password = 'La contraseña debe incluir al menos una letra minúscula';
    } else if (!/[0-9]/.test(password)) {
        errors.password = 'La contraseña debe incluir al menos un número';
    }

    return errors;

}