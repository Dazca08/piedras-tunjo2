import { Rol } from './rol.interface';

export interface Usuario {
    Id: number;
    Nombre: string;
    Apellido: string;
    TipoDocumento: string;
    NumeroDocumento: string;
    FechaNacimiento: any;
    LugarExpedicion: string;
    CorreoElectronico: string;
    Clave: string;
    Icono_url: string;
    VerificacionCuenta: boolean;
    EstadoCuenta: boolean;
    RolId: number;
    Rol: Rol;
    Imagen_documento: string;
    Token: string;
}
