export interface HotelesBasic {
    idHotel: number
    cedulaJuridica: string,
    nombre: string,
    telefono: string
}

export interface Hoteles {
    idHotel: number,
    cedulaJuridica: string,
    nombre: string,
    telefono: string,
    sitioWeb: string,
    correoElectronico: string,
    petFriendly: boolean,
    ley7600: boolean,
    multimedia: string,
    idiomas: string[],
    horario: Horario,
    direccion: Direccion
}

export interface RedesSociales {
    tipo: string,
    url: string,
}

export interface Horario {
    lunes: string,
    martes: string,
    miercoles: string,
    jueves: string,
    viernes: string,
    sabado: string,
    domingo: string
}

export interface Direccion {
    gps: string,
    provincia: string,
    canton: string,
    distrito: string,
    senasExactas: string
}