export interface Aventura {
    idEmpresaAventura: number,
	cedulaJuridica: string,
	nombre: string,
	contacto: string,
	correoElectronico: string,
    activo: number,
    direccion: Direccion
}

export interface Direccion {
    gps: string,
    provincia: string,
    canton: string,
    distrito: string,
    senasExactas: string
}