export interface Noticia {
    id?: number;
    titulo?: string;
    descripcion?: string;
    fechaPublicacion?: Date;
    imagenesUrl?: string;
    calificacion: number;
    estado: number;
}
