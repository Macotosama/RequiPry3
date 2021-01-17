export interface HotelesBasic {
    idHotel: number
    cedula: string,
    nombre: string,
    telefono: string
}

export interface Hoteles {
    idHotel: number
    cedula: string,
    nombre: string,
    telefono: string,
    sitioWep: string,
    correo: string,
    facebook: string,
    petFriendly: boolean,
    ley7600: boolean
}

export interface RedesSociales {
    tipo: string,
    url: string,
}