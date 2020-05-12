import { Cabana } from './cabana.interface';
import { Usuario } from './usuario.interface';

export interface ReservaCabana {
    Id?: number;
    FechaReserva?: Date;
    ValorTotal?: number;
    UUsuarioId?: number;
    UUsuario?: Usuario;
    UCabanaId?: number;
    UCabana?: Cabana;
}

