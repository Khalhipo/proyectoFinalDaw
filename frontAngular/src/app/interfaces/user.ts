export interface User {
    id?: number,
    nombre?: string,
    password?: string,
    email?: string,
    sexo?: string,
    peso?: number,
    altura?: number,
    imgSrc?: string
}

export interface accesoUsuario {
    email: string,
    password: string
}