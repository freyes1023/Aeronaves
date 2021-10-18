import { Naves } from "./naves.model";

export interface Alquiler {
    idDestino: number;
    fechaLlegada: string;
    fechaSalida: string;
    idAeronave?: number ;
    idsPasajeros: string;
    nameDestino?:string;
    namesPasajeros?:string;
    dataAeronave?:Naves;
    description?:string;
}