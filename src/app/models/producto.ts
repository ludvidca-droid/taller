export interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagenUrl: string;
    disponibilidad: boolean;
    descuento?: number;
}