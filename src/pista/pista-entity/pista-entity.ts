export class PistaEntity {
  id: string ;
  titulo:string ;
  duracion:string;
  interprete:string;
  fecha:string;

  constructor(id:string,titulo:string,duracion:string,interprete:string,fecha:string){
      this.id = id;
      this.titulo = titulo;
      this.duracion = duracion;
      this.interprete = interprete;
      this.fecha = fecha;
  }


  getId():string{
      return this.id;
  }

  getTitulo():string{
      return this.titulo;
  }

  getDuracion():string{
      return this.duracion;
  }

  getInterprete():string{
      return this.interprete;
  }

  getFecha():string{
      return this.fecha;
  }

  toString():string{
      return `${this.id},${this.titulo},${this.duracion},${this.interprete},${this.fecha}`;
  }
}
