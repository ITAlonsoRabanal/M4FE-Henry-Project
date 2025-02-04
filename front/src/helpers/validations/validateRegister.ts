interface formikInput {
    address?: string;
    email?: string,
    password?: string, 
    confirm?: string, 
    name?: string, 
    phone?: string

}

export const validateRegister = (input: formikInput) => {
    const errors: formikInput = {}
    const { email, password, confirm, name, address, phone } = input;

    // Expresión regular para validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validación de email
    if (!email) {
        errors.email = 'El email es obligatorio';
    } else if (!emailRegex.test(email)) {
        errors.email = 'El email no tiene un formato válido';
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

    // Validación de confirmación de contraseña
    if (!confirm) {
        errors.confirm = 'Debes confirmar la contraseña';
    } else if (password !== confirm) {
        errors.confirm = 'Las contraseñas no coinciden';
    }


    // Validacion de nombre y apellido
    if (!name) {
        errors.name = 'El nombre es obligatorio';
    } else if (!/^\S+\s+\S+/.test(name.trim())) {
            errors.name = 'Debes ingresar un nombre y un apellido';
        }
    
    // Validación de dirección
    if (!address) {
        errors.address = 'La dirección es obligatoria';
    } else if (!/\d/.test(address)) {
        errors.address = 'La dirección debe incluir al menos un número';
    } else if (!/^\S+\s+\S+/.test(address.trim())) {
        errors.address = 'La dirección debe contener al menos dos palabras separadas por un espacio';
    } else if (!/^[a-zA-Z0-9\s]+$/.test(address)) {
        errors.address = 'La dirección solo puede contener letras, números y espacios';
    }

    // Validacion de numero de telefono
    if (!phone) {
        errors.phone = 'El número de teléfono es obligatorio';
    } else if (!/^\d+$/.test(phone)) {
        errors.phone = 'El número de teléfono solo puede contener dígitos, sin espacios ni símbolos';
    } else if (phone.length < 10 || phone.length > 15) {
        errors.phone = 'El número de teléfono debe tener entre 10 y 15 dígitos';
    }

    console.log(errors);
    
    return errors;
};
