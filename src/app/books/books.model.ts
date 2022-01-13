export interface Books {
  id: number | null;
  titulo: string;
  descripcion: string;
  precio: number;
  fechaPublicacion?: Date;
  autor: {
    id:string;
    nombreCompleto: string;
  };
}
